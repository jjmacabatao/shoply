
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../features/cart/contexts/CartContext";
import SearchBar from "./SearchBar";
import { Heart, List, Menu, ShoppingCart, Store, User2, X } from "lucide-react";
import { useProduct } from "../../features/products/contexts/ProductContext";
import { toast } from "sonner";
import { useState } from "react";
import Button from './Button'

const NavBar = ( {title, subTitle}) => {
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
  const { cartSize } = useCart();
  const { favorite } = useProduct();
  const location = useLocation();

  return (
    <nav className="flex flex-row justify-between sticky top-0 bg-white/90 z-10 shadow-md backdrop-blur-sm">
      <div className='hidden flex-col h-26 justify-center-safe px-10 pb-2 text-[#16A34A] md:pr-5 sm:pr-5 2xl:flex xl:flex lg:flex md:flex'>
        <Link to="/">
          <span className=" text-6xl lg:text-7xl font-extrabold ">{title}</span>
          <p className='-mt-1.5 ml-1.5 lg:text-[13px] text-[#0f172a] md:text-[11px] sm:text-[11px]'>{subTitle}</p>
        </Link>
      </div>
      <div className='flex h-26 flex-col justify-center-safe px-3 pb-2 md:pr-5 sm:pr-5 2xl:hidden xl:hidden lg:hidden md:hidden sm:px-10'>
        <Link to="/">
          <span className="font-extrabold text-[55px] px-4 rounded-full text-white bg-[#16A34A]">{title[0]}</span>
        </Link>
      
      </div>

      <SearchBar placeholder={"Search . . ."} hidden={(location.pathname !== '/' && location.pathname !=='/products' && location.pathname !== '/favorites')  && true }/>
      <div className='hidden lg:flex items-center align-middle gap-2 px-10 pb-2 text-[#6B7280] relative h-26'>
        <Link to="/products" className={`p-1.5 m-auto transition-transform hover:scale-110 active:scale-95 ${(location.pathname === '/' || location.pathname ==='/products') && 'text-green-600'}`}>
          <Store size={35} strokeWidth={1} className='cursor-pointer'/>
        </Link>

        <div className={`relative p-1.5 m-auto transition-transform hover:scale-110 active:scale-95 ${location.pathname === '/favorites' && 'text-green-600'}`}>
          <Link to="/favorites">
            <Heart strokeWidth={1} size={35} className='cursor-pointer'/>
          </Link>
          {
            favorite.length > 0 && (
              <span className='absolute text-[14px] text-white px-1.5 bg-red-600 rounded-full ml-5 -mt-9 animate-bounce'>
                {favorite.length}
              </span>
            )
          }
        </div>
        
        <div className={`relative p-1.5 m-auto transition-transform hover:scale-110 active:scale-95 ${location.pathname === '/cart' && 'text-green-600'} `}>
          <Link to="/cart">
            <ShoppingCart strokeWidth={1} size={35} className='cursor-pointer'/>
          </Link>
          {
            cartSize > 0 && (
              <span className='absolute text-[14px] text-white px-1.5 bg-red-600 rounded-full ml-5 -mt-9 animate-bounce'>
                {cartSize}
              </span>
            )
          }
        </div>
        
        <User2 strokeWidth={1}  size={35} className='cursor-pointer transition-transform hover:scale-110 active:scale-95' onClick={() => toast.warning("Function is not available.")}/>
      </div>


      <div className='flex items-center gap-4 pl-10 pr-5 pb-2 text-[#6B7280] relative h-26 lg:hidden'>
        <Button onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}>
            {isFloatingMenuOpen ? <X strokeWidth={1} size={35} className="cursor-pointer"/> : <Menu strokeWidth={1} size={35} className="cursor-pointer"/>}
        </Button>

        {
            // red dot in the menu icon when floating menu/ mobile menu is hidden
            (favorite.length > 0 || cartSize >0) && (
              <span className={`absolute text-[10px] px-1 bg-red-600 text-red-600 rounded-full ml-5 -mt-5 animate-bounce ${isFloatingMenuOpen && 'hidden'}`}>
                0
              </span>
            )
          }
      </div>
      
      {/* Mobile Menu */}
      {isFloatingMenuOpen && (
        <div className="lg:hidden flex flex-col gap-3 text-[#6B7280] px-6 pb-4 bg-white shadow absolute right-0 mt-25">
          <Link to="/products" className={`m-auto transition-transform hover:scale-110 active:scale-95 ${(location.pathname === '/' || location.pathname === '/products')&& 'text-green-600'}`}>
            <Store strokeWidth={1} size={35} className='cursor-pointer'/>
          </Link>

          <div className={`relative m-auto transition-transform hover:scale-110 active:scale-95 ${location.pathname === '/favorites' && 'text-green-600'}`}>
            <Link to="/favorites">
              <Heart strokeWidth={1} size={35} className='cursor-pointer'/>
            </Link>
            {
              favorite.length > 0 && (
                <span className='absolute text-[14px] text-white px-1.5 bg-red-600 rounded-full ml-5 -mt-9 animate-bounce'>
                  {favorite.length}
                </span>
              )
            }
          </div>

          <div className={`relative m-auto transition-transform hover:scale-110 active:scale-95 ${location.pathname === '/cart' && 'text-green-600'}`}>
            <Link to="/cart">
              <ShoppingCart strokeWidth={1} size={35} className='cursor-pointer'/>
            </Link>
            {
              cartSize > 0 && (
                <span className='absolute text-[14px] text-white px-1.5 bg-red-600 rounded-full ml-5 -mt-9 animate-bounce'>
                  {cartSize}
                </span>
              )
            }
          </div>
          
          <User2 strokeWidth={1}  size={35} className='cursor-pointer m-auto transition-transform hover:scale-110 active:scale-95' onClick={() => toast.warning("Function is not available.")}/>
        
        </div>
      )}

    </nav>
  );
};

export default NavBar;