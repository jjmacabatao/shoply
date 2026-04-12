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
