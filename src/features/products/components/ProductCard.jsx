import React from 'react'
import { Star, Heart, ShoppingCart, View} from "lucide-react";
import Button from '../../../shared/components/Button';
import { Link } from 'react-router-dom';
import Ratings from '../../../shared/components/Ratings';
import { useProduct } from '../contexts/ProductContext';
import { useCart } from '../../cart/contexts/CartContext';


const ProductCard = ({ product }) => {
  const { favorite, handleOnclickAddToFavorite} = useProduct();
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow hover:shadow-2xl transition-all duration-300 overflow-hidden group px-4 py-6">

     {/* Card Image */}
      <div className="relative flex items-center justify-center h-68 p-4">
        <button className="absolute -top-2 right-0 p-2 hover:scale-120 active:scale-95 transition">
          <Heart size={33} strokeWidth={1} className={`text-gray-500 ${favorite.includes(product.id) && 'fill-red-600 text-red-600'}`} onClick={()=>handleOnclickAddToFavorite(product.id)}/>
        </button>

        <img src={product.thumbnail}alt={product.title} className="h-65 object-contain"/>
      </div>

      {/* Card Details */}
       <div className="px-4 flex flex-col gap-2">

        <h3 className="text-[#111827] font-semibold text-[19px]">
          {product.title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#111827]">
            $ {product.price}
          </span>
        </div>
      </div>

      <div className='p-3'>
        <Ratings rating={ product.rating } />
      </div>
      

      {/* Button wrapper */}
      <div className='flex flex-row justify-center gap-4 pt-8 pb-2'>
        <Button variant={'viewDetails'}>
          <Link to={`/products/${product.id}`}>
            <div className='flex gap-1'>
              <View strokeWidth={1.5} /> View Details
          </div>
          </Link>
        </Button>
        
        <Button onClick={() =>  addToCart(product)} variant={'success'}>
          <div className='flex gap-1'>
              <ShoppingCart strokeWidth={1.5} /> Add Cart
          </div>
        </Button>
        
      </div>
    </div>
  )
}

export default ProductCard

