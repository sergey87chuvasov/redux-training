import { createStore } from 'redux';

// create reducer for store and write events that I want to handle
const counter = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }

  if (action.type === 'DECREMENT') {
    return state - 1;
  }

  if (action.type === 'RESET') {
    return 0;
  }
  return state;
};

// export store and action
export const store = createStore(counter);

// create action  - simply {}
export const increment = {
  type: 'INCREMENT',
};

export const decrement = {
  type: 'DECREMENT',
};

export const reset = {
  type: 'RESET',
};
