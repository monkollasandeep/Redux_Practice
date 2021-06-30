import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);

  const show = useSelector(state => state.counter.showCounter);

  const incrementhandler = () => {
    dispatch(counterActions.increment());
  };

  const increasehandler = () => {
    dispatch(counterActions.increase(10 ));
  };
  
  
  const decrementhandler = () => {
    dispatch(counterActions.decrement());
  };

  const resethandler = () => {
    dispatch(counterActions.reset());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Number Created</h1>
      {show && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementhandler}>Increment</button>
        <button onClick={resethandler}>Reset</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>
      <button onClick={increasehandler}>Increase</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
