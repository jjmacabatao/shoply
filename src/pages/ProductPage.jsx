import React from 'react'
import MainLayout from '../layouts/MainLayout';
import ProductList from '../features/products/components/ProductList';
import { useProduct } from '../features/products/contexts/ProductContext';
import PageNotification from '../shared/components/PageNotification';
import { BounceLoader } from 'react-spinners';

const ProductPage = () => {
    const { loading, error } = useProduct();
    return (
        <MainLayout>
            { loading && <BounceLoader className="m-auto mt-50 opacity-50" color="#99a1af" speedMultiplier={1.2}/> }
            { error && <PageNotification>{error}</PageNotification> }
            { (!loading && !error) && <ProductList/> }
        </MainLayout>
    )
}

export default ProductPage