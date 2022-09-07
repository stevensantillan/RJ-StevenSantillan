import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from './ItemList';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


const ItemListContainer = () => {
 
const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

const {category} = useParams()

useEffect(() => {
setLoading(true)

pedirDatos()
    .then((res) =>{
      if (!category){
        setProductos(res)
      } else {
        setProductos (res.filter((prod) => prod.category === category))
      }
        
    })
    .catch((error) =>{
      console.log(error)
    })
    .finally(()=>{
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
