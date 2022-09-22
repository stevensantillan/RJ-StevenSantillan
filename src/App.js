import './App.css';
import { CartProvider } from './components/context/CartContext';
import AppRouter from './router/AppRouter';
import { LoginProvider } from './components/context/LoginContext';


function App() {
  return (
    
    <>
    <LoginProvider>
      <CartProvider>
          <AppRouter/>
      </CartProvider>
    </LoginProvider>
    
    </> 

  );
}

export default App;
