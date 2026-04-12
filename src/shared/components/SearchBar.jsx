import React from 'react'
import Button from './Button'
import { UseProductContext } from '../../features/products/contexts/ProductContext';
import DropDown from './DropDown';

const SearchBar = ({placeholder}) => {
  const { setSearchKeyword,searchKeyword, productCategories, selectedCategory, setSelectedCategory } = UseProductContext();

  return (
    <section className='flex flex-row justify-end-safe gap-2 items-center w-250'>
        <div className='flex flex-row gap-2'>
          <input 
            onChange={(e) => setSearchKeyword(e.target.value)} 
            className="bg-white border border-solid border-gray-400 rounded-md w-150 p-2" 
            type="text" placeholder={placeholder} 
            value={searchKeyword}/>
        </div>

        <DropDown dropdownOptions={productCategories} value={selectedCategory} onSetValue={setSelectedCategory}/>
    </section>
  )
}

export default SearchBar