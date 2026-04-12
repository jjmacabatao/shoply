import { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

const ProductContext = createContext();

export const ProductProvider = ( {children} ) => {
    const [searchKeyword, setSearchKeyword] = useState(""); // search keyword state
    const [products, setProduct] = useState([]); // products state
    const [favorite, setFavorite] = useState([]); // favorite products state
    const [selectedCategory, setSelectedCategory] = useState(""); // selected category state (for filtering products)
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchProducts()
            .then(setProduct)
            .catch((res) => {
                console.error(res);
                setLoading(false);
            })
            .finally(() => setLoading(false));
        
    }, []);

    useEffect(() => {
        console.log(selectedCategory);
    }, [selectedCategory]);

    const filteredProducts = products.filter((product) => {
        // condition based on the search keyword
        const matchesSearch = product.title
        .toLowerCase()
        .includes(searchKeyword.toLowerCase());
        // condition based on the search category
        const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
        return matchesSearch && matchesCategory;
    });

    const filteredProductsCategories = [
        ...new Set(products.map((product) => product.category)),
    ];

    const handleOnclickAddToFavorite = (id) => {
        setFavorite((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
        );
    };

    const value = {
        products: filteredProducts,
        setSearchKeyword,
        searchKeyword,
        handleOnclickAddToFavorite,
        favorite,
        productCategories: filteredProductsCategories,
        setSelectedCategory,
        loading,
        setLoading,
    }


    return ( 
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {

    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("useProduct must used within ProductProvider.");
    }

    return context;
};
