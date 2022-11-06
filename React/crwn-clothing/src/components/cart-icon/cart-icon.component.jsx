import React from 'react';
import { CartContext } from '../../context/cart/cart.context';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = () => {
    const {isActive,setActive, numberCartItems} = React.useContext(CartContext);
    
    const toogleCart = () => setActive(!isActive);

    return (
        <div className='cart-icon-container' onClick={toogleCart}> 
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{numberCartItems}</span>
        </div>
    )
}

export default CartIcon;