import React from 'react'
import PageNotification from '../../../shared/components/PageNotification';
import { useProduct } from '../contexts/ProductContext';
import ProductCard from './ProductCard';
import { useCart } from '../../cart/contexts/CartContext';

const FavoriteProductList = () => {
    const { favorite, products, handleOnclickAddToFavorite } = useProduct();
    const { addToCart } = useCart();
  return (
    <section className='bg-[#F3F4F6] px-10 py-1'>
        <div className='px-1 text-2xl text-gray-700 mt-2 pb-2' >
        { 
            favorite.length > 0 
            ? 
                <span>{favorite.length} product(s) found!</span> 
            : 
                <PageNotification>Favorite is empty!</PageNotification>
            }
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5'>
        {
          products.map((product) => {
            return (
                favorite.includes(product.id) &&
                 <ProductCard 
                    key = {product.id} 
                    product = {product}
                    addToCart = {addToCart}
                    addToFavorite = {handleOnclickAddToFavorite}
                    isInFavorite = {favorite.includes(product.id)}
                />
            )
          })
        }
        </div>
    </section>
  )
}

export default FavoriteProductList