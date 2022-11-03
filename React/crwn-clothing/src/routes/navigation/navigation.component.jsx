import {Outlet, Link} from 'react-router-dom';
import navLogo from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <>
            <header className='navigation'>
                <Link className='logo-container' to = '/'>
                    <img src={navLogo} alt='Logo'/>
                </Link>
                <nav className='nav-links-container'>
                    <ul>
                        <li>
                            <Link className='nav-link.container' to = '/shop'>Shop</Link>
                            <Link className='nav-link.container' to = '/auth'>Sign-In</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Navigation;