import React from 'react'
import Button from '../../../shared/components/Button'

const CartCard = ( {product, removeFromCart} ) => {
    
  return (
    <article className='bg-white w-full p-4 rounded-md flex flex-row gap-3 items-center justify-between'>
        <div className='w-30 bg-gray-100'>
            <img src={product.item.thumbnail} alt={product.item.title} className='object-contain m-auto'/>
        </div>

        <div className="p-4 flex flex-col gap-2 w-[70%]">
            <h3 className="text-gray-800 font-semibold text-md">
                {product.item.title} ( {product.quantity}x )
            </h3>

            <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-800">
                    ${product.item.price}
                </span>
            </div>
        </div>

        {/* Button wrapper */}
        <div className='flex flex-row items-center justify-end gap-2 '>
            <Button onClick={() =>  removeFromCart(product.item)} variant={'danger'}>
                Remove from Cart
            </Button>
        </div>

    </article>
  )
}

export default CartCard