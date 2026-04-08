import React from 'react'
import ProductCard from './ProductCard'
import { UseProductContext } from '../contexts/ProductContext';
import { UseCartContext } from '../../cart/contexts/CartContext';

const ProductList = () => {
  
  const { products, handleOnclickAddToFavorite, favorite } = UseProductContext();
  const { addToCart } = UseCartContext();
  const productCount = products.length;


  return (
    
    <section className='bg-[#F3F4F6] px-10 py-1'>
      <div className='px-1 text-2xl text-gray-700 mt-2 pb-2' >
        { productCount > 0 ? <span>{productCount} Product(s) Found!</span> : <span>No Product Found!</span>}
      </div>

      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5'>
        {
          
          products.map((product) => (
            
            <ProductCard 
              key = {product.id} 
              product = {product}
              cardFor={'products'}
              addToCart = {addToCart}
              addToFavorite = {handleOnclickAddToFavorite}
              isInFavorite = {favorite.includes(product.id)}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ProductList