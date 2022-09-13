import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemDetailUnit from './ItemDetailUnit';


const ItemDetail = ({item}) => {

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>

        <Grid container direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
            columns={16}>

        {<ItemDetailUnit producto={item}/>}

        </Grid>
    </Box>              
    </>
  )
}

export default ItemDetail