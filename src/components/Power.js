import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { addp, subp, boostp, fullchargep } from '../store/power';

const Power = () => {

  const dispatch = useDispatch();
  const power = useSelector(state => state.power.power);


  const addphandler = () => {
    dispatch(addp());
  };

  const boostphandler = () => {
    dispatch(boostp());
  };
  
  
  const subphandler = () => {
    dispatch(subp());
  };

  const fullchargephandler = () => {
    dispatch(fullchargep());
  };

  return (
    <main className={classes.counter}>
      <h1>Number Created</h1>
      <div className={classes.value}>{power}</div>
      <div>
        <button onClick={addphandler}>Add Power</button>
        <button onClick={fullchargephandler}> charge +10 Power</button>
        <button onClick={subphandler}>sub Power</button>
      </div>
      <button onClick={boostphandler}>BoostUP Power </button>
    </main>
  );
};

export default Power;