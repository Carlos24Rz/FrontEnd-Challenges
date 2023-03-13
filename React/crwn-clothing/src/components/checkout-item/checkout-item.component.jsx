import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, deleteItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import './checkout-item.style.scss';

const CheckoutItem = ({checkoutItem}) => {
    const {name,imageUrl, price, quantity} = checkoutItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addProduct = () => dispatch(addItemToCart(cartItems,checkoutItem));
    const removeProduct = () => dispatch(removeItemFromCart(cartItems,checkoutItem));
    const deleteProduct = () => dispatch(deleteItemFromCart(cartItems,checkoutItem));


    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeProduct}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addProduct}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={deleteProduct}>&#10005;</span>
        </div>
    );
};

export default CheckoutItem