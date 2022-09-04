import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { grey } from '@mui/material/colors';
import { pedirDatos } from '../../../helpers/pedirDatos';
import { useParams } from 'react-router-dom';

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
      loading ? <h2> Loading... </h2> : <ItemDetail item={item}/>
      }
    </Box> 
  )
}

export default ItemDetailContainer