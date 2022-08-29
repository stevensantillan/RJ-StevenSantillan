import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from './ItemList';


const ItemListContainer = () => {
  
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
    <ItemList productos={productos}/>
  )
}

export default ItemListContainer