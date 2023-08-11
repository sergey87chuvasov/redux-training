import redux from 'redux';
// import redux, { legacy_createStore } from 'redux';

//func reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
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
const store = redux.legacy_createStore(counterReducer);

export default store;
