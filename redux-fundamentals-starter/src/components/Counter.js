import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice';

// import { Component } from 'react';
// import { connect } from 'react-redux';

const Counter = () => {
  const dispatchFunction = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const isCounterInvisible = useSelector((state) => state.counter.isCounterInvisible);

  const incrementHandler = () => {
    // dispatchFunction({
    //   type: 'increment',
    // });
    dispatchFunction(counterActions.increment())
  };

  const decrementHandler = () => {
    // dispatchFunction({
    //   type: 'decrement',
    // });
    dispatchFunction(counterActions.decrement())
  };

  const increaseHandler = () => {
    // dispatchFunction({
    //   type: 'increase',
    //   number: 100,
    // });

    dispatchFunction(counterActions.increase(100))
  };

  const toggleCounterHandler = () => {
    dispatchFunction(counterActions.setCounterVisibility())
  };

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      { !isCounterInvisible && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+100</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Счётчик</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>+</button>
//           <button onClick={this.decrementHandler.bind(this)}>-</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Спрятать / Показать</button>
//       </main>
//     );
//   }
// }

// // связать состояние с пропсами
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
