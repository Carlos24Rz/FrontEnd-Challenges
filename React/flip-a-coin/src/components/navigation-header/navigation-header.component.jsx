import './navigation.header.style.css';
import Logo from '../../assets/Logo.svg';

const NavigationHeader = () => {
    return (
        <header className='nav-header'>
            <div className=''><img src={Logo} alt='Flip a coin' /></div>
        </header>
    );
};

export default NavigationHeader;
