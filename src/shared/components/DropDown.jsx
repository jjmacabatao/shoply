import React from 'react'
import { capitalizedFirstLetter } from '../../utils/'

const DropDown = ( {dropdownOptions, defaultOption, value, onSetValue, className, withLabel = false, label = ''} ) => {
  return (
    <section className='flex flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:gap-2'>
      {withLabel && <span className='text-gray-700 text-lg'>{label} :</span>}
      <select 
        value={value} 
        onChange={(e) => onSetValue(e.target.value)} 
        className={className}
    >
        <option value="">{defaultOption}</option>
        {
            dropdownOptions.map((opt) => (
                <option key={opt}  value={opt.toLowerCase()}>
                    {capitalizedFirstLetter(opt)}
                </option>
            ))
        }
    </select>
    </section>
  )
}

export default DropDown