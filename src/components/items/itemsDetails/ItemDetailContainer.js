import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { grey } from '@mui/material/colors';
import { pedirDatos } from '../../../helpers/pedirDatos';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const primary = grey[400];

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const {itemId} = useParams()



  useEffect(() => {
    setLoading(true)
    pedirDatos()
        .then((res) =>{
          setItem(res.find((prod) => prod.id === Number(itemId)))
        })
        .catch((error) =>{
          console.log(error)
        })
        .finally(()=>{
          setLoading(false)
        })
  },[])

  return (
    <Box sx={{bgcolor: primary}}>
      {
      loading 
      ? <Stack sx={{ color: 'grey.500', mt: 30 }} spacing={2} direction="row" justifyContent="center">
          <CircularProgress color="secondary" size={170}/>
        </Stack>
      : <ItemDetail item={item}/>
      }
    </Box> 
  )
}

export default ItemDetailContainer