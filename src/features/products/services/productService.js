const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=50");

  if (!response.ok) {
    throw new Error("Something went wrong. Failed to fetch the products.");
  }

  const responseData = await response.json();

  return responseData.products;
};

const fetchProduct = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Something went wrong. Failed to fetch the product.");
  }

  const responseData = await response.json();

  return responseData;
};

export { fetchProducts, fetchProduct };
