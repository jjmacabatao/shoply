import React from 'react'
import { Star, Heart} from "lucide-react";
import Button from '../../../shared/components/Button';
import { Link } from 'react-router-dom';


// const ProductCardImage = ({id, thumbnail, title, addToFavorite}) => {

//   return (
//     <div className="relative flex items-center justify-center h-68 p-4">
//       <button className="absolute top-3 right-3 p-2 hover:scale-120 transition">
//         <Heart size={20} className={`text-gray-600`} onClick={()=>addToFavorite(id)}/>
//       </button>

//       <img src={thumbnail}alt={title} className="h-70 object-contain"/>
//     </div>
//   )
// }

const ProductCardDetails = ({title, price, rating}) => {
  return (
    <>
      <div className="p-4 flex flex-col gap-2">

        <h3 className="text-gray-800 font-semibold text-sm line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-800">
            ${price}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1 px-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < rating
                ? "fill-[#FACC15] text-[#FACC15]"
                : "text-gray-300"
            }
          />
        ))}
      </div>
    </>
  )
}


const ProductCard = ({cardFor, product, addToFavorite, isInFavorite, addToCart, removeFromCart}) => {
  // console.log(inFavorite);
  return (
    <div className="bg-white border border-gray-300 rounded-2xl shadow hover:shadow-2xl transition-all duration-300 overflow-hidden group px-4 py-2">

      {/* <ProductCardImage id={product.id} thumbnail={product.thumbnail} title={product.title} addToFavorite={addToFavorite}/> */}
      {/* Card Image */}
      <div className="relative flex items-center justify-center h-68 p-4">
        <button className="absolute top-3 right-3 p-2 hover:scale-120 transition">
          <Heart size={20} className={`text-gray-600 ${isInFavorite && 'fill-red-600'}`} onClick={()=>addToFavorite(product.id)}/>
        </button>

        <img src={product.thumbnail}alt={product.title} className="h-70 object-contain"/>
      </div>

      {/* Card Details */}
      <ProductCardDetails title={product.title} price={product.price} rating={product.rating}/>

      {/* Button wrapper */}
      <div className='flex flex-row justify-end gap-2 pt-4 pb-2'>
        <Button variant={'viewDetails'}>
          <Link to={`/products/${product.id}`}>
            View Details
          </Link>
        </Button>
        
        {
          cardFor === 'products' ? 
            <Button onClick={() =>  addToCart(product)} variant={'success'}>
              Add to Cart
            </Button> :
            <Button onClick={() =>  removeFromCart(product)} variant={'success'}>
              Remove from Cart
            </Button>
        }
        
      </div>
    </div>
  )
}

export default ProductCard

