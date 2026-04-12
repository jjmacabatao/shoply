

import './App.css'

import { ProductProvider } from "./features/products/contexts/ProductContext";
import { CartProvider } from "./features/cart/contexts/CartContext";
import AppRouter from './routes/AppRouter';

function App() {

  return (
    <>

      <ProductProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App
