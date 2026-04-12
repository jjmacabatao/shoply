import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductPage from '../pages/ProductPage'
import CartPage from "../pages/CartPage"
 import ProductDetailsPage from "../pages/ProductDetailsPage"

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<ProductPage/>}/>
            <Route path="/products" element={<ProductPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/products/:id" element={<ProductDetailsPage />}/>
        </Routes>
    </Router>
  )
}

export default AppRouter