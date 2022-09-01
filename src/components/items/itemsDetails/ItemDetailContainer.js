import { Box } from '@mui/material'
import React from 'react'
import ItemDetail from './ItemDetail'
import { grey } from '@mui/material/colors';

const primary = grey[400];

const ItemDetailContainer = () => {
  return (
    <Box sx={{bgcolor: primary}}>
      <ItemDetail/>
    </Box> 
  )
}

export default ItemDetailContainer