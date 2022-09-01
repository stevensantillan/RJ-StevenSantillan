import './App.css';
import Navbar from './components/header/Navbar';
import ItemCount from './components/items/ItemCount';
import ItemDetailContainer from './components/items/itemsDetails/ItemDetailContainer';
import ItemListContainer from './components/items/ItemListContainer';

function App() {
  return (
    <>
    <Navbar />
    <ItemDetailContainer/>
    <ItemListContainer/>
    </> 
  );
}

export default App;
