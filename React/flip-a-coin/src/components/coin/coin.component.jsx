import Heads from '../../assets/coin-head.svg'
import Tails from '../../assets/coin-tails.svg'
import './coin.style.scss'


const Coin = () => {
    return(
        <div class="cards-wrapper">
            <div class="card-container">
                <div class="card rotated">
                    <img src={Heads} alt='Heads' class="card-contents card-front"></img>
                    <img src={Tails} alt='Tails' class="card-contents card-back"></img>
                </div>
            </div>
        </div>
    );
};

export default Coin;