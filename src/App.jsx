
import { ProductProvider } from "./features/products/contexts/ProductContext";
import { CartProvider } from "./features/cart/contexts/CartContext";
import AppRouter from './routes/AppRouter';
import { Toaster } from 'sonner';

function App() {

  return (
    <>
      <ProductProvider>
        <CartProvider>
          <AppRouter />
          <Toaster/>
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App
