import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import navLogo from '../../assets/crown.svg'
import { UserContext } from '../../context/user/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss'

const Navigation = () => {
    const {currentUser} = React.useContext(UserContext);
    
    return (
        <>
            <header className='navigation'>
                <Link className='logo-container' to = '/'>
                    <img src={navLogo} alt='Logo'/>
                </Link>
                <nav className='nav-links-container'>
                    <ul>
                        <li>
                            <Link className='nav-link' to = '/shop'>Shop</Link>
                            {currentUser ? 
                                (<span className='nav-link' onClick={signOutUser}>Sign Out</span>) 
                                : (<Link className='nav-link' to = '/auth'>Sign-In</Link>)
                            }
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Navigation;