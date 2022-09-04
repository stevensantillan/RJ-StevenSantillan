import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from './ItemList';


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
      loading ? <h2> Loading... </h2> : <ItemList productos={productos}/>
      }
    </>
      )
}

export default ItemListContainer