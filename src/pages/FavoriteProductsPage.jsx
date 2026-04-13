import React from 'react'
import MainLayout from '../layouts/MainLayout'
import FavoriteProductList from '../features/products/components/FavoriteProductList'

const FavoriteProductsPage = () => {
  return (
        <MainLayout>
            <FavoriteProductList />
        </MainLayout>

    )
}

export default FavoriteProductsPage