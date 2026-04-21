import { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import { getObjectLocalStorageData, getStringLocalStorageData, setLocalStorage } from "../../../utils/localStorage";
import { toast } from "sonner";
import { sortingCategories } from "../../../utils";

const ProductContext = createContext();

export const ProductProvider = ( {children} ) => {
    const [searchKeyword, setSearchKeyword] = useState(()=>getStringLocalStorageData("searchProductKeyword")); // search keyword state
    const [products, setProduct] = useState([]); // products state
    const [favorite, setFavorite] = useState(() => getObjectLocalStorageData("favoriteProducts")); // favorite products state
    const [selectedCategory, setSelectedCategory] = useState(()=>getStringLocalStorageData("selectedProductCategory")); // selected category state (for filtering products)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [sortBy, setSortBy] = useState(()=>getStringLocalStorageData("sortBy")); // sorting option state
    
    useEffect(() => {
        
        fetchProducts()
            .then(setProduct)
            .catch((res) => {
                setError(res.message);
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

    useEffect(() => {
        setLocalStorage("sortBy",sortBy);
    }, [sortBy]);

    // filter products based on the search keyword and selected category
    const filteredProducts = products.filter((product) => {
        // condition based on the search keyword
        const matchesSearch = product.title
        .toLowerCase()
        .includes(searchKeyword.toLowerCase());
        // condition based on the search category
        // if selectedCategory is not empty, check if product.category matches selectedCategory, otherwise return true to include all products.
        const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
        return matchesSearch && matchesCategory;
    });

    // sort filtered products based on the selected sorting option
    const filteredAndSortedProducts = filteredProducts.sort((a, b) => {
        // a - b: returns a negative value if 'a' comes before 'b' (ascending order)
        // b - a: returns a negative value if 'b' comes before 'a' (descending order)
        // localeCompare: returns a negative value if 'a' comes before 'b' (alphabetical order)
        switch (sortBy) {
            case sortingCategories[0].toLowerCase(): // "Price: Low to High"
                return a.price - b.price;
            case sortingCategories[1].toLowerCase(): // "Price: High to Low"
                return b.price - a.price; 
            case sortingCategories[2].toLowerCase(): // "Top Rated"
                return b.rating - a.rating;
            case sortingCategories[3].toLowerCase(): // "Name: A to Z"
                return a.title.localeCompare(b.title);
            case sortingCategories[4].toLowerCase(): // "Name: Z to A"
                return b.title.localeCompare(a.title);
            default:
                return 0; // No sorting, return original order
        }
    });


    const filteredProductsCategories = [
        ...new Set(products.map((product) => product.category)),
    ];

    const handleOnclickAddToFavorite = (id) => {
        setFavorite((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
        );
        toast.success(`Successfully ${favorite.includes(id) ? 'removed from' : 'added to'} favorites.`);
    };

    const value = {
        products: filteredAndSortedProducts,
        setSearchKeyword,
        searchKeyword,
        handleOnclickAddToFavorite,
        favorite,
        productCategories: filteredProductsCategories,
        setSelectedCategory,
        selectedCategory,
        loading,
        setLoading,
        error,
        sortBy,
        setSortBy,
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
