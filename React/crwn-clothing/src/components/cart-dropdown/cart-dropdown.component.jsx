import './cart-dropdown.styles.scss';
import { Link } from 'react-router-dom';
import React  from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';


const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);
    
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