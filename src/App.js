import './App.css';
import React from 'react';
import Die from './components/Die';

function App() {
  const [dice, setDice] = React.useState(allNewDice);

  function allNewDice() {
    const diceArray = [];
  
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      });
    }
  
    return diceArray;
  }

  function rollDice() {
    setDice(allNewDice);
  }

  const diceElements = dice.map(die => <Die value={die.value} />)
  
  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className='roll-btn' onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
