import React from 'react'
import { useCart } from '../contexts/CartContext'
import ProductCard from '../../products/components/ProductCard';

const CartList = () => {
  const { cartProducts, cartSize, removeFromCart } = useCart();
  
  return (
    <section className='bg-[#F3F4F6] px-10 py-1'>
        <div className='px-1 text-2xl text-gray-700 mt-2 pb-2' >
                { cartSize > 0 ? <span>{cartSize} Product(s) Found!</span> : <span>Cart is empty!</span>}
            </div>

        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5'>
          {
            
            cartProducts.map((product) => (
              <ProductCard 
                key = {product.item.id} 
                product = {product.item}
                cardFor={'cart'}
                removeFromCart={removeFromCart}
              />
            ))
          }
        </div>
        
        
    </section>
  )
}

export default CartList