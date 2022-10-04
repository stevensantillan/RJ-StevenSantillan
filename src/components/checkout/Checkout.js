import React, {useState} from 'react';
import { useCartContext } from '../context/CartContext'
import { Navigate } from 'react-router-dom';
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Swal from 'sweetalert2';
import CheckoutView from './CheckoutView';

const Checkout = () => {

    const { cart, totalCart, finishShop  } = useCartContext()

    const [values, setValues] = useState({
        nombre: "",
        apellido: "",
        email: "",
        direccion: "",
        codPostal: "",
        metodoPago: "",
        numTarjeta: ""
    })

    const handleImputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
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
                            console.log(doc.id)
                            finishShop(doc.id)
                        })
                })
        } else {
            console.log(outOfStock)
            Swal.fire({
                title: 'No hay stock del producto',
                text: `El producto ${outOfStock[0].nombre} no tiene stock dispoible. Por favor reemplace este producto en su carrito.`,
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Continuar'
              })   
        }

    }

    if (cart.length === 0){
        return <Navigate to={"/"}/>
    }

  return (
    <>
    <CheckoutView values={values} handleImputChange={handleImputChange} handleSubmit={handleSubmit} />
    </>
  )
}

export default Checkout