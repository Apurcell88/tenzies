import './App.css';
import React from 'react';
import Die from './components/Die';
import {nanoid} from 'nanoid';

/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 * 
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */

function App() {
  const [dice, setDice] = React.useState(allNewDice);

  function allNewDice() {
    const diceArray = [];
  
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      });
    }

    return diceArray;
  }

  function rollDice() {
    setDice(allNewDice);
  }

  const diceElements = dice.map(die =>
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
    />)
  
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
