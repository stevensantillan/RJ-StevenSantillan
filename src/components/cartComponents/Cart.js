import { Card, CardContent, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

  const { cart } = useContext(CartContext)

  return (
  <>
    {cart.map((producto)=>(
      <Card style={{background: "#e1b7edf2"}}>
      <CardContent style={{background: "#c869f4f2"}}>
        <Typography gutterBottom variant="h3" component="div" fontSize="28px">
          {producto.nombre}
        </Typography>
        <Typography gutterBottom variant="span" component="div" fontSize="28px">
          Precio: ${producto.precio}
        </Typography>
        <Typography gutterBottom variant="span" component="div" fontSize="28px">
          Cantidad: {producto.cantidad}
        </Typography>
      </CardContent>
      </Card>
    ))}
  </>
  )
}

export default Cart