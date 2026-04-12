import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [cartSize, setCartSize] = useState(0);

    useEffect(() => {
        setCartSize(cartProducts.length);
    }, [cartProducts]);


    const updateCartProductQuantity = (id,operation) => {
        switch (operation) {
            case 'increment':
                return cartProducts.map((item) => {
                    if (item.item.id === id) {
                        item.quantity += 1;
                        setCartSize(cartSize + 1);
                    }
                    return item;
                });
            case 'decrement':
                return cartProducts.map((item) => {
                    if (item.item.id === id) {
                        item.quantity -= 1;
                        setCartSize(cartSize - 1);
                    }
                    return item;
                });
        }
    }

    const addToCart = (product) => {
        console.log("add to cart is called");
        const inCart = cartProducts.find((item) => item.item.id === product.id);
        if (inCart) {
            setCartProducts(updateCartProductQuantity(product.id,'increment'));
            toast.success(`${product.title} was successfully added to the cart.`);
        } else {
            setCartProducts((prev) => [...prev, { item: product, quantity: 1 }]);
            setCartSize(cartSize + 1);
            toast.success(`${product.title} was successfully added to the cart.`);
        }
    };

    const removeFromCart = (product) => {
        console.log("remove from cart is called");
        // TODO:
        // find the product from the cart and check its quantity
        // if quantity > 1 then decrease value by 1 otherwise remove from the array.
        const cartData = cartProducts.find((item) => item.item === product);
        
        if (cartData.quantity > 1) {
            // decrease it quantity by 1
            setCartProducts(updateCartProductQuantity(product.id,'decrement'));
            toast.success(`${product.title} was successfully removed from the cart.`);
        } else {
            setCartProducts(cartProducts.filter((item) => {
                if(product.id !== item.item.id) {
                    return item;
                }
            }));
            setCartSize(cartSize - 1);
            toast.success(`${product.title} was successfully removed from the cart.`);
        }
    };

    const clearCart = () => {
        setCartProducts([]);
        toast.success('Cart was successfully cleared.');
    }

    const useCartHook = {
        cartProducts,
        cartSize,
        addToCart,
        removeFromCart,
        setCartProducts,
        clearCart,
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
