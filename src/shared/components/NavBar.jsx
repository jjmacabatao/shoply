
import { Link } from "react-router-dom";
import { UseCartContext } from "../../features/cart/contexts/CartContext";
import SearchBar from "./SearchBar";
import { ShoppingCart, User2 } from "lucide-react";

const NavBar = ( {title, subTitle}) => {
  const { cartSize } = UseCartContext();
  return (
    <nav className="flex flex-row justify-between sticky top-0 bg-white z-10 border-b">
      <div className='h-26 flex flex-col justify-center-safe px-10 pb-2 text-green-600'>
        <Link to="/">
          <span className="text-7xl font-bold">{title}</span>
          <p className='-mt-1.5 font-normal text-[13px] text-[#0f172a]'>{subTitle}</p>
        </Link>
        
      </div>
      <SearchBar placeholder={"Search . . ."}/>
      <div className='flex items-center gap-4 px-10 pb-2 text-green-600 relative h-26'>
        <Link to="/cart">
          <ShoppingCart size={35} className='cursor-pointer'/>
        </Link>
        
        <User2  size={35} className='cursor-pointer'/>
        {
          cartSize > 0 && (
            <span className='absolute text-[14px] text-white font-semibold px-1.5 bg-red-600 rounded-full ml-5 -mt-5 animate-bounce'>
              {cartSize}
            </span>
          )
        }
      </div>
    </nav>
  );
};

export default NavBar;