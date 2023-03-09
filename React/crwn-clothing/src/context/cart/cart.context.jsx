import { createContext, useReducer} from "react";

const addCartItem = (cartItems,product) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === product.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === product.id
                ? {...cartItem,quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [...cartItems,{...product,quantity: 1}];
};

const removeCartItem = (cartItems,product) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === product.id && cartItem.quantity > 1
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === product.id
                ? {...cartItem,quantity: cartItem.quantity - 1}
                : cartItem
        );
    }

    return [...cartItems];
};

const deleteCartItem = (cartItems,product) => {
    const newList = cartItems.filter(cartItem => cartItem.id !== product.id);
    return newList;
}; 

export const CartContext = createContext({
    isActive: false,
    setActive: () => {},
    cartItems: [],
    addItemToCart: () => {},
    numberCartItems: 0,
    setNumberCartItems: () => {}
});

const INITIAL_STATE = {
    isActive: false,
    cartItems: [],
    numberCartItems: 0,
    totalPrice: 0,
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload,
            };
        case 'SET_ACTIVE_STATE':
            return {
                ...state,
                ...payload
            };
        default:
            throw new Error(`unhandled type of ${type} in cartReducer`);
    }
}

export const CartProvider = ({children}) => {

    const [{isActive, cartItems, numberCartItems, totalPrice}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total,cartItem) => total + cartItem.quantity,
            0
        );

        const newCartTotal = newCartItems.reduce(
            (total,cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );

        dispatch({
            type: 'SET_CART_ITEMS', 
            payload: {
                cartItems: newCartItems,
                numberCartItems: newCartCount,
                totalPrice: newCartTotal,
            }})
    }

    const setActive = (bool) => {
        dispatch({
            type: 'SET_ACTIVE_STATE',
            payload: {
                isActive: bool
            } 
        })

    };
    
    const addItemToCart = (product) => {
        const newCartItems = addCartItem(cartItems,product);
        updateCartItemsReducer(newCartItems);   
    };

    const removeItemFromCart = (product) => {
        const newCartItems = removeCartItem(cartItems,product);
        updateCartItemsReducer(newCartItems);
    }

    const deleteItemFromCart = (product) => {
        const newCartItems = deleteCartItem(cartItems,product);
        updateCartItemsReducer(newCartItems);
    }

    const value = {
        isActive,
        setActive,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart, 
        cartItems, 
        numberCartItems, 
        totalPrice};

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};