import React from 'react';
import { useCartContext } from '../context/CartContext'
import { Navigate } from 'react-router-dom';
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Swal from 'sweetalert2';
import CheckoutView from './CheckoutView';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Checkout = () => {

    const { cart, totalCart, finishShop  } = useCartContext()

    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            email: "",
            direccion: "",
            codPostal: "",
            metodoPago: "",
            numTarjeta: ""    
        },

        validationSchema: Yup.object({
            nombre: Yup.string()
            .required("El campo nombre es requerido")
            .min(3, "El campo nombre debe tener como mínimo 3 letras")
            .max(15, "El campo nombre debe tener como máximo 15 letras"),
            apellido: Yup.string()
            .required("El campo apellido es requerido")
            .min(3, "El campo apellido debe tener como mínimo 3 letras")
            .max(15, "El campo apellido debe tener como máximo 15 letras"),
            email: Yup.string()
            .required("El campo email es requerido")
            .email("El formato del email es incorrecto"),
            direccion: Yup.string()
            .required("El campo dirección es requerido")
            .min(3, "El campo dirección debe tener como mínimo 3 letras")
            .max(15, "El campo dirección debe tener como máximo 15 letras"),
            codPostal: Yup.number()
            .required("El campo código postal es requerido")
            .test('len', 'El campo código postal debe tener 4 números', val => val.toString().length === 4)
            .positive("El campo código postal no puede ser negativo"),
            metodoPago: Yup.string()
            .required("El campo método de pago es requerido"),
            numTarjeta: Yup.string()
                .when(
                    'metodoPago', {
                    is: (metodoPago)=> metodoPago ==='credito',
                    then: Yup.string()
                            .required("El campo número de tarjeta es requerido")
                            .min(16, "El campo número de tarjeta debe tener como mínimo 16 números")
                            .max(16, "El campo número de tarjeta debe tener como máximo 16 números"),
                    otherwise: Yup.string().notRequired(),
                }
            ),               
        }),

        onSubmit: async () => {
    
            const orden = {
                comprador: formik.values,
                items: cart,
                total: totalCart()
            }
            
            const batch = writeBatch(db)
            const ordenesRef = collection(db, "ordenes")
            const productsRef = collection(db, "productos")
    
            const q = query(productsRef, where(documentId(), "in", cart.map(item => item.id)))
            
            const productos = await getDocs(q)
    
            const outOfStock = []
    
            productos.docs.forEach((doc) =>{
                const itemInCart = cart.find(item => item.id === doc.id)
    
                if (doc.data().stock >= itemInCart.cantidad) {
                    batch.update(doc.ref, {
                        stock: doc.data().stock - itemInCart.cantidad
                    })
                } else {
                    outOfStock.push(itemInCart)
                }
    
            })
    
            if(outOfStock.length === 0){
                batch.commit()
                    .then(() => {
                        addDoc (ordenesRef, orden)
                            .then((doc) => {
                                finishShop(doc.id)
                            })
                    })
            } else {
                Swal.fire({
                    title: 'No hay stock del producto',
                    text: `El producto ${outOfStock[0].nombre} no tiene stock dispoible. Por favor reemplace este producto en su carrito.`,
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Continuar'
                  })   
            }
    
        } 
    })

    if (cart.length === 0){
        return <Navigate to={"/"}/>
    }

  return (
    <>
    <CheckoutView 
        values={formik.values} 
        handleImputChange={formik.handleChange} 
        handleSubmit={formik.handleSubmit}
        formik={formik} />
    </>
  )
}

export default Checkout