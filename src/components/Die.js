const Die = (props) => {
  const diceHeld = props.isHeld ? 'held' : '';

  return (
    <div className={[diceHeld, 'die-face'].join(' ')}>
      <h2>{props.value}</h2>
    </div>
  );
}
 
export default Die;