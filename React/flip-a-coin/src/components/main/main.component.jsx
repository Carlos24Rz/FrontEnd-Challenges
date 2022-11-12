import './main.style.css';
import React from "react";
import ScoreContainer from "../score-container/score-container.component";
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

    const reset = () => {
        setHeadsCount(0);
        setTailsCount(0);
        setOutcome(null);
    };

    return(
        <main className='main-content'>
            <div className='heading'>
                <h1 className='title'>Flip a Coin</h1>
                <div className='scores-container'>
                    <ScoreContainer outcome='Heads' count={headsCount}/>
                    <ScoreContainer outcome='Tails' count={tailsCount}/>
                </div>
            </div>
            <div className='subheading'>
                {isSpinning && <p className='loading'>Flipping it!</p>} 
                {outcome && <p className='outcome'> {`${outcome}!`}</p>}    
                {(!outcome && !isSpinning) && <p>Flip the coin and guess your destiny!</p>}
                <button onClick={reset} type="button" className='reset'>Reset</button>
            </div>
            <Coin flipCoinHandler={flipCoin} outcome={outcome} isSpinning={isSpinning}/>
        </main>
    );
};

export default Main;