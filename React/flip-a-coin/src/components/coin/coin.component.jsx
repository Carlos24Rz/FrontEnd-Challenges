import Heads from '../../assets/coin-head.svg'
import './coin.style.css'

const Coin = () => {
    return(
        <img src={Heads} alt='coin' className='coin'></img>
    );
};

export default Coin;