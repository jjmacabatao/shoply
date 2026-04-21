import React from 'react'
import ProductCard from './ProductCard'
import { useProduct } from '../contexts/ProductContext';
import PageNotification from '../../../shared/components/PageNotification';
import { capitalizedFirstLetter, sortingCategories } from '../../../utils';
import DropDown from '../../../shared/components/DropDown';

const ProductList = () => {
  
  const { products, selectedCategory, sortBy, setSortBy } = useProduct();
  const productCount = products.length;

  return (
    <>
      <section className='bg-[#F3F4F6] px-10 py-1'>
          { 
            productCount > 0 
              ? 
                <div className='flex flex-row justify-between items-end mt-10 mb-2'
                >
                  <span className='text-gray-700 text-lg'>
                    <strong>{productCount}</strong> product(s) found!
                  </span>
                  <DropDown 
                    dropdownOptions={sortingCategories} 
                    defaultOption={'Default'} 
                    value={sortBy} 
                    onSetValue={setSortBy} 
                    className='bg-white border border-solid border-gray-400 rounded-md p-2 w-45 text-gray-700'
                    withLabel={true} label={'Sort by'}
                  />

                </div>
                
              : 
                <PageNotification>
                  {`No products found in the "${capitalizedFirstLetter(selectedCategory) || 'All Products'}" category with the given keyword.`}
                </PageNotification>
            }
        
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
          {
            products.map((product) => (
              
              <ProductCard 
                key = {product.id} 
                product = {product}
              />
            ))
          }
        </div>
      </section>
          
    </>
  )
}

export default ProductList