import React from 'react'
import { capitalizedFirstLetter } from '../../utils/'

const DropDown = ( {dropdownOptions, value, onSetValue} ) => {
  return (
    <select value={value} onChange={(e) => onSetValue(e.target.value)} className="bg-white border border-solid border-gray-400 rounded-md lg:w-40 p-2 md:w-35 sm:w-35" >
        <option value="">All Products</option>
        {
            dropdownOptions.map((opt) => (
                <option key={opt}  value={opt.toLowerCase()}>
                    {capitalizedFirstLetter(opt)}
                </option>
            ))
        }
    </select>
  )
}

export default DropDown