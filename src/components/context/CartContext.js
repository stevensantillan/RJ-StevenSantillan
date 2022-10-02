import { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem("carrito")) || [] 

export const CartProvider = ({children}) => {

    const [cart, SetCart] = useState(init)

    const addToCart = (producto) => {
        SetCart([...cart, producto])
    }

    const removeItem = (id) => {
        SetCart (cart.filter((producto) => producto.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, producto) => acc + producto.cantidad, 0)
    }

    const totalCart = () => {
        return cart.reduce((acc, producto) => acc + producto.precio * producto.cantidad,0) 
    }

    const deleteCart = () => {
        
        if (totalCart() !== 0){
            Swal.fire({
                title: 'Atención',
                text: "Esta seguro de eliminar todos los elementos del carrito?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!'
              }).then((result) => {
                if (result.isConfirmed) {
                    SetCart([])
                }
            })
        }        
    }

    const finishShop = (id) => {
        Swal.fire({
            title: 'Compra finalizada con éxito!',
            text: `Tu número de orden es ${id}`,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Continuar'
          })
          SetCart([])
    }


    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(cart))
    }, [cart])


    return (
        <CartContext.Provider value={
            {
                cart,
                addToCart,
                isInCart,
                cartQuantity,
                totalCart,
                deleteCart,
                removeItem,
                finishShop
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}