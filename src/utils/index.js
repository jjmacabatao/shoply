export const capitalizedFirstLetter = (str) => {
  return !str ? "" : str.charAt(0).toUpperCase() + str.slice(1);
};

export const computeCartTotalPrice = (products) => {
  let totalPrice = 0;

  products.forEach((item) => {
    totalPrice += item.item.price * item.quantity;
  });

  return totalPrice.toFixed(2);
};

export const totalRatings = (reviews) => {
  return (
    reviews.reduce((total, item) => total + item.rating, 0) / reviews.length
  );
};

export const favoriteInProducts = (products, favorite) => {
  const filteredProducts = products.filter(
    (product) => favorite.includes(product.id) && product,
  );
  return filteredProducts.length;
};

export const sortingCategories = [
  "Price: Low to High",
  "Price: High to Low",
  "Top Rated",
  "Name: A to Z",
  "Name: Z to A",
];
