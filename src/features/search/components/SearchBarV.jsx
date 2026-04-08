
import Button from '../../../shared/components/Button';
import useSearch from '../hooks/useSearch';

const SearchBarV = ({placeholder}) => {
  const { setQuery, query, handleOnclickSearch } = useSearch();


  return (
    <section className='flex flex-row justify-end gap-2 p-10 bg-[#F3F4F6]'>
        <div className='w-200 flex flex-row gap-2'>
          {/* <select className='p-2' onChange={() => handleOnChangeSearchBy(event)}>
            <option value="title">Search By Product Name</option>
            <option value="category">Search By Product Category</option>
          </select> */}
          <input 
            onChange={(e) => setQuery(e.target.value)} 
            className="bg-white border border-solid border-gray-400 rounded-md w-150 p-2" 
            type="text" placeholder={placeholder} 
            value={query}/>
        </div>
        
        <Button onClick={() => handleOnclickSearch} variant={'primary'}> Search </Button>
    </section>
  )
}

export default SearchBarV