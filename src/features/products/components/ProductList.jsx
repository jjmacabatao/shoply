import React from 'react'
import ProductCard from './ProductCard'
import { useProduct } from '../contexts/ProductContext';
import PageNotification from '../../../shared/components/PageNotification';
import { capitalizedFirstLetter } from '../../../utils';

const ProductList = () => {
  
  const { products, selectedCategory } = useProduct();
  const productCount = products.length;

  return (
    <>
      <section className='bg-[#F3F4F6] px-10 py-1'>
        <div className='px-1 text-2xl text-gray-700 mt-2 pb-2' >
          { 
            productCount > 0 
              ? 
                <span>{productCount} product(s) found!</span> 
              : 
                <PageNotification>
                  {`No products found in the "${capitalizedFirstLetter(selectedCategory) || 'All Products'}" category with the given keyword.`}
                </PageNotification>
            }
        </div>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3'>
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