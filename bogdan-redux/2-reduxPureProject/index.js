import store from './redux/store.js';
// import getCurrentTime from './utils/getCurrentTime.js';
import { addCurrentTime, clearTimes } from './redux/actionCreator.js';

// // console.log(store);
// // console.log(store.getState()); // [] - first state of our app

// const unsubscribe = store.subscribe(() =>
//   console.log(`Redux store just changed! ${store.getState()}`)
// );
// /*
//  Redux store just changed! 11:33:25
//  Redux store just changed! 11:33:25,11:44:33
//  Redux store just changed!
//  */

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:33:25',
// });

// // if we use unsubscribe
// unsubscribe();
// /*

// /*
//  Redux store just changed! 11:33:25
// */

// // console.log(store.getState()); // ['11:33:25']

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:44:33',
// });

// // console.log(store.getState()); // (2) ['11:33:25', '11:44:33']

// store.dispatch({
//   type: 'CLEAR_ALL_TIMES',
// });

// // console.log(store.getState()); // []

// const addTimeBtn = document.getElementById('addTime');
// addTimeBtn.addEventListener('click', () => {
//   store.dispatch({
//     type: 'ADD_CURRENT_TIME',
//     payload: getCurrentTime(),
//   });
// });

// const clearTimesBtn = document.getElementById('clearTimes');
// clearTimesBtn.addEventListener('click', () => {
//   store.dispatch({
//     type: 'CLEAR_ALL_TIMES',
//   });
// });

const addTimeBtn = document.getElementById('addTime');
addTimeBtn.addEventListener('click', () => {
  store.dispatch(addCurrentTime());
});

const clearTimesBtn = document.getElementById('clearTimes');
clearTimesBtn.addEventListener('click', () => {
  store.dispatch(clearTimes());
});

const timesList = document.getElementById('timesList');
store.subscribe(() => {
  timesList.innerHTML = '';
  const times = store.getState();
  times.forEach((time) => {
    let li = document.createElement('li');
    li.innerText = time;

    timesList.appendChild(li);
  });
});
