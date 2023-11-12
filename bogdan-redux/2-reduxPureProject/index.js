import store from './redux/store.js';

// console.log(store);
// console.log(store.getState()); // [] - first state of our app

const unsubscribe = store.subscribe(() =>
  console.log(`Redux store just changed! ${store.getState()}`)
);
/**
 Redux store just changed! 11:33:25
 Redux store just changed! 11:33:25,11:44:33
 Redux store just changed! 
 */

store.dispatch({
  type: 'ADD_CURRENT_TIME',
  payload: '11:33:25',
});

// if we use unsubscribe
unsubscribe();
/*

/*
 Redux store just changed! 11:33:25
*/

// console.log(store.getState()); // ['11:33:25']

store.dispatch({
  type: 'ADD_CURRENT_TIME',
  payload: '11:44:33',
});

// console.log(store.getState()); // (2) ['11:33:25', '11:44:33']

store.dispatch({
  type: 'CLEAR_ALL_TIMES',
});

// console.log(store.getState()); // []
