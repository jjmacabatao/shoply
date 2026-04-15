import React from 'react'
import Button from '../../../shared/components/Button'
import QuantityButton from '../../../shared/components/QuantityButton'
import { useCart } from '../contexts/CartContext'
import { Trash2 } from 'lucide-react'

const CartCard = ( {product} ) => {
    const { removeFromCart, addToCart } = useCart();
  return (
    <article className='bg-white w-full p-4 rounded-md flex flex-row gap-3 items-center justify-between'>
        <div className='w-30 bg-gray-100 rounded-lg'>
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
        <div className='flex flex-row items-center justify-end gap-3 '>
            <QuantityButton quantity={product.quantity} onClickIncrease={() =>  addToCart(product.item)} onClickDecrease={() =>  removeFromCart(product.item)}/>
            <Trash2 onClick={() =>  removeFromCart(product.item,true)} className='cursor-pointer hover:text-red-600' size={25}/>
            {/* <Button onClick={() =>  removeFromCart(product.item)} variant={'danger'}>
                <Trash2 />
            </Button> */}
        </div>

    </article>
  )
}

export default CartCard