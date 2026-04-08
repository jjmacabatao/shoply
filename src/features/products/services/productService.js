const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const responseData = await response.json();
  return responseData.products;
};

const fetchProduct = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const responseData = await response.json();
  return responseData;
};

export { fetchProducts, fetchProduct };
