import { Star } from 'lucide-react'
import React from 'react'

const Ratings = ( {rating, starSize, textSize} ) => {
  return (
    <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
            <Star
            key={i}
            size={starSize}
            className={
                i < rating.toFixed(0)
                ? "fill-[#FACC15] text-[#FACC15]"
                : "text-gray-300"
            }
            />
        ))}<span className={`text-[${textSize}px]`}>( {rating.toFixed(2)} )</span>
    </div>
  )
}

export default Ratings