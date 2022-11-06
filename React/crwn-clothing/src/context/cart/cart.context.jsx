import { useState,createContext, useEffect} from "react";

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

export const CartProvider = ({children}) => {
    const [isActive,setActive] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [numberCartItems,setNumberCartItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        const {count,totalPrice} = cartItems.reduce(
            (total,cartItem) => {
                total.count += cartItem.quantity;
                total.totalPrice += cartItem.quantity * cartItem.price;
                return total;
            },
            {count: 0, totalPrice: 0}
        );
        setNumberCartItems(count);
        setTotalPrice(totalPrice);
    },[cartItems]);
    
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems,product));   
    };

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems,product));
    }

    const deleteItemFromCart = (product) => {
        setCartItems(deleteCartItem(cartItems,product));
    }

    const value = {isActive,setActive,addItemToCart,removeItemFromCart,deleteItemFromCart, cartItems, numberCartItems, totalPrice};

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};