import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from './ItemList';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


const ItemListContainer = () => {
 
//let publicKey = "11c8d4b61cc1cff00d37f27fb266568f"
//let privateKey = "dec81fc7ce4abe390810e3ba0b65f17354523a7c"
//1dec81fc7ce4abe390810e3ba0b65f17354523a7c11c8d4b61cc1cff00d37f27fb266568f
// MD5 Hash: 90f8c88603bfa6250792bfcf86f04956
// ts: 1

const [comicList, setComicList] = useState(null); 
const [loading, setLoading] = useState(true)

useEffect(() => {
    setLoading(true)

    fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=11c8d4b61cc1cff00d37f27fb266568f&hash=90f8c88603bfa6250792bfcf86f04956')
        .then((res) => res.json())
        .then((data) => {
            setComicList(data.data.results);
        })
        .catch((err) => console.log(err))
        .finally(()=>{
            setLoading(false)})
}, [])

console.log(comicList)

  return (
    <>
      {
      loading 
      ? <Stack sx={{ color: 'grey.500', mt: 30 }} spacing={2} direction="row" justifyContent="center">
          <CircularProgress color="secondary" size={170}/>
        </Stack>
      : <ItemList productos={comicList}/>
      }
    </>
      )
}

export default ItemListContainer

//const [productos, setProductos] = useState([])
//const [loading, setLoading] = useState(true)

//const {category} = useParams()

//useEffect(() => {
// setLoading(true)

//  pedirDatos()
//      .then((res) =>{
//        if (!category){
//          setProductos(res)
//       } else {
//          setProductos (res.filter((prod) => prod.category === category))
//        }
        
//      })
//      .catch((error) =>{
//        console.log(error)
//      })
//      .finally(()=>{
//        setLoading(false)
//      })
//},[category])