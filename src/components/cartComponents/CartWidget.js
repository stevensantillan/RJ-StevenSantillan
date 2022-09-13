import React, { useContext } from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Typography } from '@mui/material';
import { CartContext } from '../context/CartContext';


const CartWidget = () => {

  const { cartQuantity } = useContext(CartContext)

  return (
    <Stack className='cart' direction="row" spacing={1} mr={2}>
      <IconButton color="warning" aria-label="add to shopping cart">
        <AddShoppingCartIcon sx={{fontSize: 30}}/>
        <Typography color="warning">{cartQuantity}</Typography>
      </IconButton>
    </Stack>
  )
}

export default CartWidget