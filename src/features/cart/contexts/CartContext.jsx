import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [cartSize, setCartSize] = useState(0);

    useEffect(() => {
        console.log("cart products", cartProducts);
    }, [cartProducts]);

    const addToCart = (product) => {
        console.log("add to cart is called");
        const inCart = cartProducts.find((item) => item.item.id === product.id);
        if (inCart) {
            setCartProducts(
            cartProducts.map((item) => {
                if (item.item.id === product.id) {
                item.quantity += 1;
                setCartSize(cartSize + 1);
                }
                return item;
            }),
            );
        } else {
            setCartProducts((prev) => [...prev, { item: product, quantity: 1 }]);
            setCartSize(cartSize + 1);
        }
    };

    const removeFromCart = (product) => {
        console.log("remove from cart is called");
        // TODO:
        // find the product from the cart and check its quantity
        const cartData = cartProducts.find((item) => item.item === product);
        console.log(cartData);
        if (cartData.quantity > 1) {
        // decrease it quantity by 1
        } else {
        // remove the product from the cartProduct
        }
    };

    const useCartHook = {
        cartProducts,
        cartSize,
        addToCart,
        removeFromCart,
        setCartProducts,
    }

    return (
        <CartContext.Provider value={useCartHook}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () =>{
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must used within CartProvider.");
    }

    return context;
}
