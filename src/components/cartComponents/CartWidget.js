import React from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const CartWidget = () => {
  return (
    <Stack className='cart' direction="row" spacing={1} mr={2}>
      <IconButton color="warning" aria-label="add to shopping cart">
        <AddShoppingCartIcon sx={{ fontSize: 30 }}/>
      </IconButton>
    </Stack>
  )
}

export default CartWidget