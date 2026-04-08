import React from 'react'
import Button from '../../../shared/components/Button'
import { Star } from 'lucide-react'

const ProductDetails = ( { product }) => {
  return (
    <div className=" shadow-2sm rounded-[20px] mt-10 p-8 flex items-center justify-between bg-white gap-10">
        <div className='object-contain bg-gray-100 rounded-2xl w-100 h-100'>
            <img src={product.images && product.images[0]} alt={product.title}/>
        </div>
        
        <div className='flex flex-col'>
            <span className='font-semibold text-5xl pb-4 shadow-2xs'>{product.title}</span>
            <p className='pt-4'>{product.description}</p>

            <div className='flex f items-center gap-2 pt-5'>
                <span className='font-bold text-4xl text-green-600' >${product.price}</span>
                <div className="flex flex-row items-center gap-1 px-3">
                    {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={25}
                        className={
                        i < product.rating
                            ? "fill-[#FACC15] text-[#FACC15]"
                            : "text-gray-300"
                        }
                    />
                    ))}
                </div>
            </div>
            
            <div className='flex flex-row items-center-safe justify-end gap-5 pt-15 w-full'>
                <Button variant={'success'}> Add to Cart </Button>
                <Button onClick={() => window.history.back()} variant={'outline'}> Back </Button>
            </div>
        </div>
        
    </div>
  )
}

export default ProductDetails