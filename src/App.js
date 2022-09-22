import './App.css';
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from './components/context/CartContext';
import AppRouter from './router/AppRouter';


function App() {
  return (
    
    <>
    <CartProvider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </CartProvider>
    </> 

  );
}

export default App;
