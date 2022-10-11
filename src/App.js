import './App.css';
import { CartProvider } from './components/context/CartContext';
import AppRouter from './router/AppRouter';
import { AuthContextProvider } from './components/context/AuthContext';


function App() {
  return (
    
    <>
    <AuthContextProvider>
      <CartProvider>
          <AppRouter/>
      </CartProvider>
    </AuthContextProvider>
    
    </> 

  );
}

export default App;
