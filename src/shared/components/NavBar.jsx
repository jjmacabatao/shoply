
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../features/cart/contexts/CartContext";
import SearchBar from "./SearchBar";
import { Heart, List, ShoppingCart, User2 } from "lucide-react";
import { useProduct } from "../../features/products/contexts/ProductContext";
import { toast } from "sonner";

const NavBar = ( {title, subTitle}) => {
  const { cartSize } = useCart();
  const { favorite } = useProduct();
  const location = useLocation();
  return (
    <nav className="flex flex-row justify-between sticky top-0 bg-white z-10 border-b tracking-wide">
      <div className='h-26 flex flex-col justify-center-safe px-10 pb-2 text-green-600'>
        <Link to="/">
          <span className="text-7xl font-bold">{title}</span>
          <p className='-mt-1.5 font-normal text-[13px] text-[#0f172a]'>{subTitle}</p>
        </Link>
        
      </div>
      <SearchBar placeholder={"Search . . ."} hidden={(location.pathname !== '/' && location.pathname !=='/products') && true }/>
      <div className='flex items-center gap-4 px-10 pb-2 text-green-600 relative h-26'>
        <Link to="/products">
          <List size={35} className='cursor-pointer'/>
        </Link>

        <Link to="/favorites">
          <Heart size={35} className='cursor-pointer'/>
        </Link>

        <Link to="/cart">
          <ShoppingCart size={35} className='cursor-pointer'/>
        </Link>
        
        <User2  size={35} className='cursor-pointer' onClick={() => toast.warning("Function is not available.")}/>
        {
          favorite.length > 0 && (
            <span className='absolute text-[14px] text-white font-semibold px-1.5 bg-red-600 rounded-full ml-18 -mt-5 animate-bounce'>
              {favorite.length}
            </span>
          )
        }
        {
          cartSize > 0 && (
            <span className='absolute text-[14px] text-white font-semibold px-1.5 bg-red-600 rounded-full ml-31 -mt-5 animate-bounce'>
              {cartSize}
            </span>
          )
        }
      </div>
    </nav>
  );
};

export default NavBar;