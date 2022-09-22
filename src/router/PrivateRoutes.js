import React from 'react'
import Checkout from '../components/checkout/Checkout';
import Navbar from '../components/header/Navbar';
import Cart from '../components/cartComponents/Cart';
import ItemDetailContainer from '../components/items/itemsDetails/ItemDetailContainer';
import ItemListContainer from '../components/items/ItemListContainer';
import { Routes, Route, Navigate } from "react-router-dom"

const PrivateRoutes = () => {
  return (
    
    <>
        <Navbar/>

        <Routes>  
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:category' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

            <Route path='/cart' element={<Cart/>}/>

            <Route path='/checkout' element={<Checkout/>}/>
            
            <Route path='*' element={<Navigate to={'/'}/>}/>
        </Routes>
    </>
       
  )
}

export default PrivateRoutes