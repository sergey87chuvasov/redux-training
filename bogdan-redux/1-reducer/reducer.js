// init state
const initialState = [];

// obj action
// {
//   type: 'ADD_NAME',
//   payload: 'Serge'
// }

function reducer(state, action) {
  if (action.type === 'ADD_NAME') {
    return [...state, action.payload];
  }

  if (action.type === 'DELETE_NAME') {
    return state.filter((personName) => personName !== action.payload);
  }

  return state;
}

let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'Serge' });
console.log(newState); // [ 'Serge' ]

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Peter' });
console.log(newState); // [ 'Serge', 'Peter' ]

newState = reducer(newState, { type: 'MODIFY_NAME', payload: 'Peter' });
console.log(newState); // [ 'Serge', 'Peter' ] - no action with type: 'MODIFY_NAME'

newState = reducer(newState, { type: 'DELETE_NAME', payload: 'Peter' });
console.log(newState); // [ 'Serge' ]
