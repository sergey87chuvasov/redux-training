// import redux from 'redux';
import { legacy_createStore } from 'redux';

// const redux = require('redux');

//func reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.number,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// const store = legacy_createStore;
const store = legacy_createStore(counterReducer);

export default store;
