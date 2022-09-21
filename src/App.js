import './App.css';
import Navbar from './components/header/Navbar';
import ItemDetailContainer from './components/items/itemsDetails/ItemDetailContainer';
import ItemListContainer from './components/items/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Cart from './components/cartComponents/Cart';
import { CartProvider } from './components/context/CartContext';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';

function App() {
  return (
    
    <>
    <CartProvider>
      <BrowserRouter>

        <Navbar/>

        <Routes>  
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:category' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Login/>}/>

          <Route path='/cart' element={<Cart/>}/>

          <Route path='/checkout' element={<Checkout/>}/>


          <Route path='*' element={<Navigate to={'/'}/>}/>
        </Routes>   

      </BrowserRouter>
    </CartProvider>
    </> 

  );
}

export default App;
