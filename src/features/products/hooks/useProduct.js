import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

const useProducts = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [products, setProduct] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProduct);
  }, []);

  // useEffect(() => {
  //   console.log(favorite);
  // }, [favorite]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

  const handleOnclickViewDetails = (product) => {
    console.log(product);
  };

  const handleOnclickAddToFavorite = (id) => {
    setFavorite((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return {
    products: filteredProducts,
    setSearchKeyword,
    searchKeyword,
    handleOnclickViewDetails,
    handleOnclickAddToFavorite,
    favorite,
  };
};

export default useProducts;
