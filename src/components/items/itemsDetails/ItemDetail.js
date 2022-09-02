import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemDetailUnit from './ItemDetailUnit';

const ItemDetail = ({productos=[]}) => {

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>

        <Grid container direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
            columns={16}>

        {productos
            .filter(producto=> producto.id === 1)
            .map((prod) => <ItemDetailUnit producto={prod} key={prod.id} />)}

        </Grid>
    </Box>              
    </>
  )
}

export default ItemDetail