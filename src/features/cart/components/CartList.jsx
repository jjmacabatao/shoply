import React from 'react'
import { useCart } from '../contexts/CartContext'
import PageNotification from '../../../shared/components/PageNotification';
import CartCard from './CartCard';
import { computeCartTotalPrice } from '../../../utils';
import Button from '../../../shared/components/Button';
import { toast } from 'sonner';

const CartList = () => {
  const { cartProducts, cartSize, removeFromCart, clearCart, updateCartProductQuantity } = useCart();
  
  return (
    <section className='bg-[#F3F4F6] px-10 py-1'>
        <div className='px-1 text-2xl text-gray-700 mt-2 pb-2' >
                { cartSize > 0 
                    ? 
                      <span>{cartProducts.length} Product(s) Found!</span> 
                    : 
                      <PageNotification>Cart is empty!</PageNotification>
                }   
            </div>

        {/* <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5'> */}
        <div className='flex flex-col gap-2'>
          {
            cartProducts.map((product) => (
              <CartCard 
                key={product.item.id}
                product={product}
              />
            ))
          }
          <div className='bg-white p-4 flex flex-row justify-between items-center'>
            <div className='text-2xl font-semibold'>
              Total : <span className='text-green-600 font-bold'>${computeCartTotalPrice(cartProducts)}</span>
            </div>
            <div className='flex flex-row justify-end gap-2'>
              <Button variant={'primary'} onClick={() => toast.error("Function is currently not available.")} disabled={cartSize === 0}>Pay</Button>
              <Button variant={'danger'} onClick={clearCart} disabled={cartSize === 0}>Clear Cart</Button>
            </div>
            
          </div>
        </div>
        
        
    </section>
  )
}

export default CartList