import React from 'react'
import { useProduct } from '../../features/products/contexts/ProductContext';
import DropDown from './DropDown';

const SearchBar = ({ placeholder, hidden }) => {
  const { setSearchKeyword,searchKeyword, productCategories, selectedCategory, setSelectedCategory } = useProduct();
  
  return (
    <section className={`flex flex-row justify-end-safe gap-2 items-center w-full ${ hidden && 'hidden'}`}>
        <div className='flex flex-row gap-2'>
          <input 
            onChange={(e) => setSearchKeyword(e.target.value)} 
            className="bg-white border-2 border-gray-400 rounded-md p-2 2xl:w-150 xl:w-130 lg:w-100 md:w-80 sm:w-70" 
            type="text" placeholder={placeholder} 
            value={searchKeyword}/>
            <DropDown dropdownOptions={productCategories} value={selectedCategory} onSetValue={setSelectedCategory}/>
        </div>

        
    </section>
  )
}

export default SearchBar