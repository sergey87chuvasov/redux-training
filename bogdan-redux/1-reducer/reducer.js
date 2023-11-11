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

  if (action.type === 'CLEAR_NAME') {
    return [];
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

newState = reducer(newState, { type: 'CLEAR_NAME' });
console.log(newState); // [ ]

newState = reducer(newState, { type: 'ADD_NAME', payload: 'ANNA' });
console.log(newState); // [ 'ANNA' ]

newState = reducer(newState, { type: 'ADD_NAME', payload: 'POLINA' });
console.log(newState); // [ 'ANNA', 'POLINA' ]

//SWITCH

const initialState2 = [];

function reducer2(state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload];
    case 'DELETE_NAME':
      return state.filter((personName) => personName !== action.payload);
    case 'CLEAR_NAME':
      return [];
    default:
      return state;
  }
}

let newState2 = reducer2(initialState2, { type: 'ADD_NAME', payload: 'Serge' });
console.log(newState2); // [ 'Serge' ]

newState2 = reducer2(newState2, { type: 'ADD_NAME', payload: 'Peter' });
console.log(newState2); // [ 'Serge', 'Peter' ]

newState2 = reducer2(newState2, { type: 'MODIFY_NAME', payload: 'Peter' });
console.log(newState2); // [ 'Serge', 'Peter' ]

newState2 = reducer2(newState2, { type: 'DELETE_NAME', payload: 'Peter' });
console.log(newState2); // [ 'Serge' ]

newState2 = reducer2(newState2, { type: 'CLEAR_NAME' });
console.log(newState2); // [ ]

newState2 = reducer2(newState2, { type: 'ADD_NAME', payload: 'ANNA' });
console.log(newState2); // [ 'ANNA' ]

newState2 = reducer2(newState2, { type: 'ADD_NAME', payload: 'MARY' });
console.log(newState2); // [ 'ANNA', 'MARY' ]
