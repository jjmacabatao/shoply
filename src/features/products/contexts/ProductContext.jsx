import { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import { getObjectLocalStorageData, getStringLocalStorageData, setLocalStorage } from "../../../utils/localStorage";

const ProductContext = createContext();

export const ProductProvider = ( {children} ) => {
    const [searchKeyword, setSearchKeyword] = useState(()=>getStringLocalStorageData("searchProductKeyword")); // search keyword state
    const [products, setProduct] = useState([]); // products state
    const [favorite, setFavorite] = useState(() => getObjectLocalStorageData("favoriteProducts")); // favorite products state
    const [selectedCategory, setSelectedCategory] = useState(()=>getStringLocalStorageData("selectedProductCategory")); // selected category state (for filtering products)
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
        setLocalStorage("selectedProductCategory",selectedCategory);
    }, [selectedCategory]);

    useEffect(() => {
        setLocalStorage("favoriteProducts",favorite);
    }, [favorite]);

    useEffect(() => {
        setLocalStorage("searchProductKeyword",searchKeyword);
    }, [searchKeyword]);
    

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
        selectedCategory,
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
