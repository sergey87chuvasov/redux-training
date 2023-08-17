// import redux from 'redux';
// import { legacy_createStore } from 'redux';
// import { createSlice, configureStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter-slice';
import userAuthReducer from './user-auth-slice';

// const redux = require('redux');

//func reducer

// const initialCounterState = { value: 0, isCounterInvisible: false };

// const initialUserAuthState = { isUserLoggedIn: false}

// slice it is a pice of state
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.value++;
//     },
//     decrement(state) {
//       state.value--;
//     },
//     increase(state, action) {
//       // state.counter = state.counter + action.number;
//       state.value = state.value + action.payload;
//     },
//     setCounterVisibility(state) {
//       state.isCounterInvisible = !state.isCounterInvisible;
//     }
//   }
// });

// const userAuthSlice = createSlice({
//   name: 'userAuth',
//   initialState: initialUserAuthState,
//   reducers: {
//     logIn(state) {
//       state.isUserLoggedIn = true;
//     },
//     signOut(state) {
//       state.isUserLoggedIn = false;
//     }
//   }

// })


// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       isCounterInvisible: state.isCounterInvisible,
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.number,
//       isCounterInvisible: state.isCounterInvisible,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       isCounterInvisible: state.isCounterInvisible,
//     };
//   }

//   if (action.type === 'visibility') {
//     return {
//       counter: state.counter,
//       isCounterInvisible: !state.isCounterInvisible,
//     };
//   }

//   return state;
// };

// const store = legacy_createStore;
// const store = legacy_createStore(counterReducer);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: userAuthReducer
  }
});

// export const counterActions = counterSlice.actions;
// export const userAuthActions = userAuthSlice.actions;

export default store;
