import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../features/products/services/productService';
import ProductDetails from '../features/products/components/ProductDetails';
import MainLayout from '../layouts/MainLayout';
import { useCart } from '../features/cart/contexts/CartContext';

const ProductDetailsPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        fetchProduct(id).then(setProduct);
    },[]);

  return (
    <MainLayout>
        {!product ? <p>Loading product details. . . .</p> : <ProductDetails product={product} addToCart={addToCart}/> }
    </MainLayout>
  )
}

export default ProductDetailsPage