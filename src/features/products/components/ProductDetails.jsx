import React from 'react'
import Button from '../../../shared/components/Button'
import { ArrowLeft, Heart, ShoppingCart, Star } from 'lucide-react'
import ReviewList from './ReviewList'
import Ratings from '../../../shared/components/Ratings'
import { useCart } from '../../cart/contexts/CartContext'
import { useProduct } from '../contexts/ProductContext'

const ProductDetails = ( { product }) => {
    const { handleOnclickAddToFavorite, favorite } = useProduct();
    const { addToCart } = useCart();
    
  return (

    <div className=" shadow-2xs rounded-[20px] mt-10 p-8 flex flex-col items-center bg-white gap-10 overflow-hidden">
        <div className='flex flex-col lg:flex-row md:flex-row items-center md:items-start bg-white gap-10 sm:gap-5  '>
            {/* Product Image */}
            <div className='relative bg-gray-100 rounded-2xl'>
                <button className="absolute top-2 right-2 p-2 hover:scale-120 active:scale-95 transition">
                    <Heart size={35} strokeWidth={1} className={`text-gray-500 ${favorite.includes(product.id) && 'fill-red-600 text-red-600'}`} onClick={()=>handleOnclickAddToFavorite(product.id)}/>
                </button>
                <img src={product.images && product.images[0]} alt={product.title} className='object-contain w-150 sm:m-auto' loading='lazy'/>
            </div>
            {/* Product Details */}
            <div className='flex flex-col w-full'>
                <span className='font-semibold text-5xl pb-4 shadow-2xs'>{product.title}</span>
                <p className='pt-4'>{product.description}</p>

                <div className='flex f items-center gap-2 pt-5'>
                    <span className='font-bold text-4xl' >$ {product.price}</span>
                    <Ratings rating={product.rating} starSize={25} textSize={14}/>
                </div>
                
                {/* Button Container */}
                <div className='flex flex-row items-center justify-end gap-5 pt-15 w-full'>
                    <Button variant={'success'} onClick={()=>addToCart(product)}>
                        <div className='flex gap-1'>
                            <ShoppingCart strokeWidth={1.5} /> Add Cart
                        </div>
                    </Button>
                    <Button onClick={() => window.history.back()} variant={'outline'}>
                        <div className='flex gap-1'>
                            <ArrowLeft strokeWidth={1.5} /> Back
                        </div>
                    </Button>
                </div>

                
            </div>
        </div>
        
        <ReviewList reviews={product.reviews}/>
    
    </div>
  )
}

export default ProductDetails