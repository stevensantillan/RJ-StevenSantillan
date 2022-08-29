import './App.css';
import Navbar from './components/header/Navbar';
import ItemCount from './components/items/ItemCount';
import ItemListContainer from './components/items/ItemListContainer';

function App() {
  return (
    <>
    <Navbar />
    <ItemCount/>
    <ItemListContainer/>
    </> 
  );
}

export default App;
