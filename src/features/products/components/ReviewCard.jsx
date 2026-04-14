import { UserCircle2 } from 'lucide-react'
import React from 'react'
import Ratings from '../../../shared/components/Ratings'
import SmashIconUser from '../../../assets/user_by_Smashicons.png'

const ReviewCard = ( { review } ) => {
  return (
    <article className='flex flex-row bg-gray-100 p-4 rounded-xl gap-5'>
        <img src={SmashIconUser} alt='by_SmashIcons' className='w-14 h-14 mt-1 object-contain'/>
        <div className='col-start-2 col-end-12'>
            <p className='text-xl font-semibold pb-1'>{review.reviewerName} <span className='text-[14px] text-gray-400'>( {review.reviewerEmail} )</span></p>
            <Ratings rating={review.rating} starSize={18} textSize={13}/>
            <p className='text-[15px] pt-1.5' >{review.comment}</p>
            <p className='text-[12px] text-gray-500 pt-1' >Posted: {review.date}</p>  
        </div>
    </article>
  )
}

export default ReviewCard