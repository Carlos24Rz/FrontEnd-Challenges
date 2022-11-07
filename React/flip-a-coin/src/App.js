import React from "react";
import Coin from "./components/coin/coin.component";
import './App.css';


function App() {

  const [flipValue,setFlipValue] = React.useState(null);

  const flipCoin = async () => {
    const url = './.netlify/functions/todo';
    const response = await fetch(url);
    const data = await response.json();
    setFlipValue(data.outcome);
  }

  return (
    <div>
      <h1>Flip a Coin</h1>
      <Coin />
      {flipValue && <p>{`The value is ${flipValue}`}</p>}
      <button onClick={flipCoin}>Flip</button>
    </div>
  );

}

export default App;
