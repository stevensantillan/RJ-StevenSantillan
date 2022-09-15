import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../../firebase/config"

const ItemListContainer = () => {
 
const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

const {category} = useParams()

useEffect(() => {
  setLoading(true)

  const productosRef = collection(db, "productos")
  const q = category 
  ? query(productosRef, where("category","==", category))
  : productosRef

  getDocs(q)
    .then((snapshot)=>{
      const productosDb = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
      console.log(productosDb)
      setProductos(productosDb)
    })
    .finally(
      ()=>{
        setLoading(false)
    })
    

},[category])

  return (
    <>
      {
      loading 
      ? <Stack sx={{ color: 'grey.500', mt: 30}} spacing={2} direction="row" justifyContent="center">
          <CircularProgress color="secondary" size={170}/>
        </Stack>
      : <ItemList productos={productos}/>
      }
    </>
      )
}

export default ItemListContainer
