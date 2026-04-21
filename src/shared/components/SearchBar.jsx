import React from 'react'
import { useProduct } from '../../features/products/contexts/ProductContext';
import DropDown from './DropDown';

const SearchBar = ({ placeholder, hidden }) => {
  const { setSearchKeyword,searchKeyword, productCategories, selectedCategory, setSelectedCategory } = useProduct();
  
  return (
    <section className={`flex flex-row justify-end-safe gap- items-center w-full ${ hidden && 'hidden'}`}>
        <div className='flex flex-row gap-1 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2'>
          <input 
            onChange={(e) => setSearchKeyword(e.target.value)} 
            className="bg-white border border-gray-400 rounded-md p-2 w-50 2xl:w-150 xl:w-130 lg:w-100 md:w-70 sm:w-80" 
            type="text" placeholder={placeholder} 
            value={searchKeyword}
          />
          <DropDown 
            dropdownOptions={productCategories} 
            value={selectedCategory} 
            onSetValue={setSelectedCategory} 
            defaultOption={'All Products'}
            className='bg-white border border-solid border-gray-400 rounded-md p-2 w-35 lg:w-40 text-gray-700'
          />
        </div>

        
    </section>
  )
}

export default SearchBar