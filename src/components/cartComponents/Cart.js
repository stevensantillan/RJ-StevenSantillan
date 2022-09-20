import React from 'react'
import { useCartContext } from '../context/CartContext'
import CartDelete from './CartDelete'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'

const Cart = () => {

  const { cartQuantity } = useCartContext() 
 
  return (
  <>
  {
    cartQuantity() !== 0 
    ?
    <>
    <CartItem/>
    <CartDelete/>
    </>
    :
    <EmptyCart/>
  }
       
  </>
  )
}

export default Cart