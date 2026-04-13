import React from 'react'
import ProductCard from './ProductCard'
import { useProduct } from '../contexts/ProductContext';
import { useCart } from '../../cart/contexts/CartContext';
import PageNotification from '../../../shared/components/PageNotification';

const ProductList = () => {
  
  const { products, handleOnclickAddToFavorite, favorite, loading } = useProduct();
  const { addToCart } = useCart();
  const productCount = products.length;

  return (
    <>
      {
        loading
          ? 
            <section className='bg-[#F3F4F6] px-10 py-1'>
              <PageNotification>Loading Products. . . . .</PageNotification>
            </section>  
          :
          <section className='bg-[#F3F4F6] px-10 py-1'>
            <div className='px-1 text-2xl text-gray-700 mt-2 pb-2' >
            { 
              productCount > 0 
                ? 
                  <span>{productCount} product(s) found!</span> 
                : 
                  <PageNotification>No products found!</PageNotification>
              }
          </div>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5'>
            {
              products.map((product) => (
                
                <ProductCard 
                  key = {product.id} 
                  product = {product}
                  addToCart = {addToCart}
                  addToFavorite = {handleOnclickAddToFavorite}
                  isInFavorite = {favorite.includes(product.id)}
                />
              ))
            }
          </div>
          </section>
      }
    </>
  )
}

export default ProductList