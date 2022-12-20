import './App.css';
import React from 'react';
import Die from './components/Die';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti';

function App() {
  const [dice, setDice] = React.useState(allNewDice);
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => { // useEffect is a good way to keep multiple states in line
    const target = dice[0].value;
    const allHeld = dice.every(die => die.isHeld);
    const sameNumbers = dice.every(die => die.value === target);

    if (allHeld && sameNumbers) {
      setTenzies(true);
    }
    
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const diceArray = [];
  
    for (let i = 0; i < 10; i++) {
      diceArray.push(generateNewDie());
    }

    return diceArray;
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }));
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        {...die, isHeld: !die.isHeld} : {...die}
    }))
  }

  function newGame() {
    setDice(allNewDice);
    setTenzies(false);
  }

  const diceElements = dice.map(die =>
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      holdDice={holdDice}
    />)
  
  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button
        className='roll-btn'
        onClick={tenzies ? newGame : rollDice}
      >
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}

export default App;
