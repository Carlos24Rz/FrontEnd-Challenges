import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen} from '../../store/cart/cart.selector';
import { setCartActive } from '../../store/cart/cart.action';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = () => {
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const dispatch = useDispatch();
    
    const toogleCart = () => dispatch(setCartActive(!isCartOpen));

    return (
        <div className='cart-icon-container' onClick={toogleCart}> 
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;