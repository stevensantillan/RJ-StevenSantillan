import './App.css';
import Navbar from './components/header/Navbar';
import ItemDetailContainer from './components/items/itemsDetails/ItemDetailContainer';
import ItemListContainer from './components/items/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Perfil from './components/Perfil';

function App() {
  return (
    
    <>
    <BrowserRouter>

<Navbar/>

<Routes>  
  <Route path='/' element={<ItemListContainer/>}/>
  <Route path='/productos/:category' element={<ItemListContainer/>}/>
  <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
  <Route path='/perfil' element={<Perfil/>}/>
  <Route path='*' element={<Navigate to={'/'}/>}/>
</Routes>   

</BrowserRouter>
    </> 

  );
}

export default App;
