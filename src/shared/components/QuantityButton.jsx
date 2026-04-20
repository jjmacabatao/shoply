import React from 'react'
import Button from './Button'
import { Minus, Plus } from 'lucide-react'

const QuantityButton = ( {quantity, onClickIncrease, onClickDecrease} ) => {
  return (
    <div className='flex flex-row gap-1 items-center'>
        <Minus onClick={onClickDecrease} className='cursor-pointer text-[#6B7280] hover:text-red-600 transition-transform hover:scale-110 active:scale-95' size={25} strokeWidth={1}/>
            <input type='text' value={quantity} readOnly className='rounded-lg p-1 w-7 text-[#6B7280] text-center text-lg'/>
        <Plus onClick={onClickIncrease} className='cursor-pointer text-[#6B7280] hover:text-green-600 transition-transform hover:scale-110 active:scale-95' size={25} strokeWidth={1}/>
    </div>
  )
}

export default QuantityButton