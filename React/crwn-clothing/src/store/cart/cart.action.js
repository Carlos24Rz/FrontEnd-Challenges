const addCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id && cartItem.quantity > 1
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return [...cartItems];
};

const deleteCartItem = (cartItems, product) => {
  const newList = cartItems.filter((cartItem) => cartItem.id !== product.id);
  return newList;
};

export const addItemToCart = (cartItems, item) => {
  const newCartItems = addCartItem(cartItems, item);
  return {
    type: 'SET_CART_ITEMS',
    payload: newCartItems,
  };
};

export const removeItemFromCart = (cartItems, item) => {
  const newCartItems = removeCartItem(cartItems, item);
  return {
    type: 'SET_CART_ITEMS',
    payload: newCartItems,
  };
};

export const deleteItemFromCart = (cartItems, item) => {
  const newCartItems = deleteCartItem(cartItems, item);
  return {
    type: 'SET_CART_ITEMS',
    payload: newCartItems,
  };
};

export const setCartActive = (bool) => {
  return {
    type: 'SET_ACTIVE_STATE',
    payload: bool,
  };
};
