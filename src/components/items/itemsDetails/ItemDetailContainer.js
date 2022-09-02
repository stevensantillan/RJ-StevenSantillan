import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { grey } from '@mui/material/colors';
import { pedirDatos } from '../../../helpers/pedirDatos';

const primary = grey[400];

const ItemDetailContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    pedirDatos()
        .then((res) =>{
          setProductos(res)
        })
        .catch((error) =>{
          console.log(error)
        })
        .finally(()=>{
          console.log("Fin del proceso")
        })
  },[])

  return (
    <Box sx={{bgcolor: primary}}>
      <ItemDetail productos={productos}/>
    </Box> 
  )
}

export default ItemDetailContainer