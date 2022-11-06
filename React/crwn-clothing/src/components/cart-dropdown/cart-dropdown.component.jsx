import './cart-dropdown.styles.scss';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart/cart.context';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item}/>
                ))}
            </div>
            <Link to="/checkout"><Button>Go to checkout</Button></Link>
        </div>
    );
};

export default CartDropdown;