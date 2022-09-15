import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { grey } from '@mui/material/colors';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import {doc, getDoc} from "firebase/firestore"
import {db} from "../../../firebase/config"

const primary = grey[400];

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const {itemId} = useParams()

  useEffect(() => {
    setLoading(true)
    
    const docRef = doc(db, "productos", itemId)

    getDoc(docRef)
      .then((doc)=>{
        setItem({id: doc.id, ...doc.data()})
      })
      .finally(()=>{
        setLoading(false)
      })

  },[])

  return (
    <>
    {
      loading 
      ? <Stack sx={{ color: 'grey.500', mt: 30 }} spacing={2} direction="row" justifyContent="center">
          <CircularProgress color="secondary" size={170}/>
        </Stack>
      : <Box sx={{bgcolor: primary}}>
          <ItemDetail item={item}/>
        </Box>
      }
    </>
  )
}

export default ItemDetailContainer