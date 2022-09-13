import { createContext, useState } from "react";


export const CartContext = createContext()


export const CartProvider = ({children}) => {

    const [cart, SetCart] = useState([])

    const addToCart = (producto) => {
        SetCart([...cart, producto])
    }

    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, producto) => acc + producto.cantidad, 0)
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                addToCart,
                isInCart,
                cartQuantity
            }
        }>
            {children}
        </CartContext.Provider>
    )
}