import React from 'react'
import Button from '../../../shared/components/Button'
import { Star } from 'lucide-react'
import ReviewList from './ReviewList'
import Ratings from '../../../shared/components/Ratings'

const ProductDetails = ( { product, addToCart }) => {

  return (

    <div className=" shadow-2xs rounded-[20px] mt-10 p-8 flex flex-col items-center bg-white gap-10">
        <div className='flex items-center bg-white gap-10'>
            {/* Product Image */}
            <div className=' bg-gray-100 rounded-2xl w-150 '>
                <img src={product.images && product.images[0]} alt={product.title} className='object-contain h-100' loading='lazy'/>
            </div>
            {/* Product Details */}
            <div className='flex flex-col w-full h-100'>
                <span className='font-semibold text-5xl pb-4 shadow-2xs'>{product.title}</span>
                <p className='pt-4'>{product.description}</p>

                <div className='flex f items-center gap-2 pt-5'>
                    <span className='font-bold text-4xl text-green-600' >${product.price}</span>
                    <Ratings rating={product.rating} starSize={25} textSize={14}/>
                </div>
                
                {/* Button Container */}
                <div className='flex flex-row items-center justify-end gap-5 pt-15 w-full'>
                    <Button variant={'success'} onClick={()=>addToCart(product)}> Add to Cart </Button>
                    <Button onClick={() => window.history.back()} variant={'outline'}> Back </Button>
                </div>

                
            </div>
        </div>
        
        <ReviewList reviews={product.reviews}/>
    
    </div>
  )
}

export default ProductDetails