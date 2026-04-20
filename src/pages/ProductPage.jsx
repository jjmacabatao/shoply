import React from 'react'
import MainLayout from '../layouts/MainLayout';
import ProductList from '../features/products/components/ProductList';
import { useProduct } from '../features/products/contexts/ProductContext';
import PageNotification from '../shared/components/PageNotification';

const ProductPage = () => {
    const { loading, error } = useProduct();
    return (
        <MainLayout>
            { loading && <PageNotification>Loading Products. . . . .</PageNotification> }
            { error && <PageNotification>{`${error}`}</PageNotification> }
            { (!loading && !error) && <ProductList/> }
        </MainLayout>

    )
}

export default ProductPage