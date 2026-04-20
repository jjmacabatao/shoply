import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../features/products/services/productService';
import ProductDetails from '../features/products/components/ProductDetails';
import MainLayout from '../layouts/MainLayout';
import PageNotification from '../shared/components/PageNotification';

const ProductDetailsPage = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        fetchProduct(id)
          .then(setProduct)
          .catch((res) => {
            console.error(res);
            setLoading(false);
          }).finally(()=> setLoading(false));
    },[id]);

  return (
    <MainLayout>
        {
          loading ? 
            <PageNotification>Loading product details. . . .</PageNotification> 
          : 
            <ProductDetails product={product}/> 
        }
    </MainLayout>
  )
}

export default ProductDetailsPage