import { createContext, useContext } from "react";

const CartContext = createContext();
const UseCartContext = () => useContext(CartContext);


export {CartContext,UseCartContext}