export const shorten = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}`;
  return newTitle;
};

export const isInCart = (cart, product) => {
  const findProduct = cart.find((i) => i.id === product.id);
  if (findProduct) {
    return true;
  } else {
    return false;
  }
};

export const getQuantity = (cart, product) => {
  const findIndex = cart.findIndex((i) => i.id === product.id);
  if (findIndex < 0) {
    return false;
  } else {
    return cart[findIndex].quantity;
  }
};
