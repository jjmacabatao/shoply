import React from 'react'
import Button from './Button'
import { Minus, Plus } from 'lucide-react'

const QuantityButton = ( {quantity, onClickIncrease, onClickDecrease} ) => {
  return (
    <div className='flex flex-row gap-1 items-center'>
        <Minus onClick={onClickDecrease} className='cursor-pointer hover:text-red-600' size={25}/>
        {/* <Button variant={'danger'} onClick={onClickDecrease}> - </Button> */}
            <input type='text' value={quantity} readOnly className=' border-gray-400 rounded-lg p-1 w-11 text-center text-lg font-semibold3'/>
        {/* <Button variant={'danger'} onClick={onClickIncrease}> + </Button> */}
        <Plus onClick={onClickIncrease} className='cursor-pointer hover:text-green-600' size={25}/>
    </div>
  )
}

export default QuantityButton