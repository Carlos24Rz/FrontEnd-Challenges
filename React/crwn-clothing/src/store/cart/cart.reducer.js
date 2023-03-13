export const CART_INITIAL_STATE = {
  isActive: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CART_ITEMS':
      return { ...state, cartItems: payload };
    case 'SET_ACTIVE_STATE':
      return { ...state, isActive: payload };
    default:
      return state;
  }
};
