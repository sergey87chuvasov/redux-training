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

const store = createStore(counter);

// create action  - simply {}
const increment = {
  type: 'INCREMENT',
};

const decrement = {
  type: 'DECREMENT',
};

const reset = {
  type: 'RESET',
};

// ui - get number
const count = document.createElement('div');
count.innerText = store.getState();
count.id = 'count';
document.body.append(count);

// create ui - buttons
const decBtn = document.createElement('button');
decBtn.innerText = '-';
decBtn.onclick = () => store.dispatch(decrement);
document.body.append(decBtn);

const incBtn = document.createElement('button');
incBtn.innerText = '+';
// when the button is clicked, we turn to  the store and will trigger the dispatch event
incBtn.onclick = () => store.dispatch(increment);
document.body.append(incBtn);

const resetBtn = document.createElement('button');
resetBtn.innerText = 'reset';
resetBtn.onclick = () => store.dispatch(reset);
document.body.append(resetBtn);

const render = () => {
  document.getElementById('count').innerText = store.getState();
};

// for vannilla
store.subscribe(render);
