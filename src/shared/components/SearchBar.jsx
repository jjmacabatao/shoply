import React from 'react'
import Button from './Button'
import { UseProductContext } from '../../features/products/contexts/ProductContext';

const SearchBar = ({placeholder}) => {
  // const [searchBy,setSearchBy] = useState('title');
  const { setSearchKeyword,searchKeyword } = UseProductContext();


  return (
    <section className='flex flex-row justify-end-safe gap-2 items-center w-250'>
        <div className='flex flex-row gap-2'>
          {/* <select className='p-2' onChange={() => handleOnChangeSearchBy(event)}>
            <option value="title">Search By Product Name</option>
            <option value="category">Search By Product Category</option>
          </select> */}
          <input 
            onChange={(e) => setSearchKeyword(e.target.value)} 
            className="bg-white border border-solid border-gray-400 rounded-md w-150 p-2" 
            type="text" placeholder={placeholder} 
            value={searchKeyword}/>
        </div>
        
        {/* <Button onClick={() => setSearchKeyword(searchKeyword)} variant={'primary'}> Search </Button> */}
    </section>
  )
}

export default SearchBar