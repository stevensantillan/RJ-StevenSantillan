import { createContext, useContext, useEffect, useState } from "react";


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
                removeItem
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}