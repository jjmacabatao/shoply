
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import ProductPage from './pages/ProductPage'
import CartPage from "./pages/CartPage"
import useProducts from "./features/products/hooks/useProduct";
import useCart from "./features/cart/hooks/useCart";
import { ProductContext } from "./features/products/contexts/ProductContext";
import { CartContext } from "./features/cart/contexts/CartContext";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  const productHook = useProducts();
  const cartHook = useCart();

  return (
    <>
      <ProductContext.Provider value={productHook}>
        <CartContext.Provider value={cartHook}>
          <Router>
            <Routes>
              <Route path="/" element={<ProductPage/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/products/:id" element={<ProductDetailsPage/>}/>
            </Routes>
          </Router>
        </CartContext.Provider>
      </ProductContext.Provider>
    </>
  )
}

export default App
