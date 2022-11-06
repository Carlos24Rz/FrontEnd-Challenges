import React from 'react';
import { CartContext } from '../../context/cart/cart.context';
import './checkout-item.style.scss';

const CheckoutItem = ({checkoutItem}) => {
    const {name,imageUrl, price, quantity} = checkoutItem;
    const {addItemToCart, removeItemFromCart, deleteItemFromCart} = React.useContext(CartContext);

    const addProduct = () => addItemToCart(checkoutItem);
    const removeProduct = () => removeItemFromCart(checkoutItem);
    const deleteProduct = () => deleteItemFromCart(checkoutItem);


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