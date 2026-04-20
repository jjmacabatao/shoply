import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductPage from '../pages/ProductPage'
import CartPage from "../pages/CartPage"
 import ProductDetailsPage from "../pages/ProductDetailsPage"
import FavoriteProductsPage from '../pages/FavoriteProductsPage'
import NotFoundPage from '../pages/NotFoundPage'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<ProductPage/>}/>
            <Route path="/products" element={<ProductPage/>}/>
            <Route path="/favorites" element={<FavoriteProductsPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/products/:id" element={<ProductDetailsPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    </Router>
  )
}

export default AppRouter