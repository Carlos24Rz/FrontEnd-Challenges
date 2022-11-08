import React from "react";
import Heads from '../../assets/coin-head.svg';
import Tails from '../../assets/coin-tails.svg';
import './coin.style.css';


const Coin = ({flipCoinHandler, outcome, isSpinning}) => {
    return(
        <div onClick={flipCoinHandler} className={`coin ${isSpinning ? 'spinning' : ''} ${outcome === 'Tails' ? 'rotated': ''}`}>
            <img src={Heads} alt='Heads' className='heads'/>
            <img src={Tails} alt='Tails' className='tails'/>
        </div>
    );
};

export default Coin;