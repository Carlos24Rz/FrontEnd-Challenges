import React from 'react';
import {Outlet, Link} from 'react-router-dom';

import { useSelector } from 'react-redux';

import { CartContext } from '../../context/cart/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import navLogo from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import './navigation.styles.scss'

const Navigation = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const {isActive} = React.useContext(CartContext);
    return (
        <>
            <header className='navigation'>
                <Link className='logo-container' to = '/'>
                    <img src={navLogo} alt='Logo'/>
                </Link>
                <nav className='nav-links-container'>
                    <Link className='nav-link' to = '/shop'>Shop</Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            Sign Out
                        </span>
                    ) : (
                        <Link className='nav-link' to = '/auth'>
                            Sign-In
                        </Link>
                    )}
                    <CartIcon />
                </nav>
                {isActive && <CartDropdown />}
            </header>
            <Outlet />
        </>
    );
}

export default Navigation;