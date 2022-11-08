import './main.style.css';
import React from "react";
import ScoreContainer from "../../score-container/score-container.component";
import Coin from "../coin/coin.component";

const Main = () => {
    const[headsCount,setHeadsCount] = React.useState(0);
    const[tailsCount,setTailsCount] = React.useState(0);
    const[outcome,setOutcome] = React.useState(null);
    const[isSpinning,setIsSpinning] = React.useState(false);

    const flipCoin = async () => {
        if(isSpinning) return;

        setOutcome(null);
        setIsSpinning(true);
        try {
            const response = await fetch('./.netlify/functions/todo');
            const data = await response.json();
            setTimeout(() => {
                setIsSpinning(false);
                if(data.outcome === 'Heads'){
                    setHeadsCount((prevHeadsCount) => prevHeadsCount + 1 );
                } else {
                    setTailsCount((prevTailsCount) => prevTailsCount + 1 );
                }
                setOutcome(data.outcome);
            }, 2000);
        } catch (e) {
            console.log(e.message);
        }
    }

    return(
        <main className='main-content'>
            <div className='heading'>
                <h1 className='title'>Flip a Coin</h1>
                <div className='scores-container'>
                    <ScoreContainer outcome='Heads' count={headsCount}/>
                    <ScoreContainer outcome='Tails' count={tailsCount}/>
                </div>
            </div>
            <Coin flipCoinHandler={flipCoin} outcome={outcome} isSpinning={isSpinning}/>
            <p>{outcome ? `The value is ${outcome}` : ''}</p>
        </main>
    );
};

export default Main;