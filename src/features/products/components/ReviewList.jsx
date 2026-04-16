import React from 'react'
import Button from '../../../shared/components/Button'
import { toast } from 'sonner'
import ReviewCard from './ReviewCard'
import Ratings from '../../../shared/components/Ratings'
import { totalRatings } from '../../../utils'
import { PencilLine } from 'lucide-react'

const ReviewList = ( { reviews } ) => {

  return (
    <div className='flex flex-col justify-start bg-white gap-5 w-full'>
        <span className='text-4xl font-semibold border-t border-gray-300 pt-5'>Reviews</span>
        <div className='grid grid-cols-4 gap-5'>
            <span className='col-start-1 col-end-4 text-3xl'>
                <Ratings rating={totalRatings(reviews)} starSize={25} textSize={30}/>
            </span>
            <Button variant={'success'} onClick={()=> toast.info("Function is currently not available.")}>
                <div className='flex gap-2 justify-center'>
                    <PencilLine strokeWidth={1.5} /> Write Review
                </div>
            </Button>
        </div>
            {
                reviews.map((review, i) => ( 
                    <ReviewCard key={i} review={review}/>
                ))
            }
        </div>
  )
}

export default ReviewList