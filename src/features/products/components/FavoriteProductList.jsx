import React from 'react'
import PageNotification from '../../../shared/components/PageNotification';
import { useProduct } from '../contexts/ProductContext';
import ProductCard from './ProductCard';
import { capitalizedFirstLetter, favoriteInProducts } from '../../../utils';

const FavoriteProductList = () => {
    const { favorite, products, selectedCategory, searchKeyword } = useProduct();
    const countOfFavoriteInProducts = favoriteInProducts(products, favorite);
  return (
    <section className='bg-[#F3F4F6] px-10 py-1'>
        <div className='px-1 text-2xl text-gray-700 mt-2 pb-2' >
        { 
            countOfFavoriteInProducts > 0 
            ? 
                <span>{countOfFavoriteInProducts} product(s) found!</span> 
            : 
                <PageNotification>
                  {
                    favorite.length === 0 ? 'Favorite is empty!': `No favorite products found in the "${capitalizedFirstLetter(selectedCategory) || 'All Products'}" category${searchKeyword && ' with the given keyword'}.`
                  }
                </PageNotification>
            }
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3'>
        {
          products.map((product) => {
            return (
                favorite.includes(product.id) &&
                 <ProductCard 
                    key = {product.id} 
                    product = {product}
                />
            )
          })
        }
        </div>
    </section>
  )
}

export default FavoriteProductList