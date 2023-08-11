// import for node js
const redux = require('redux');

// Redux - Система Управления Состояниями - одно центральное хранилище данных для использ в компонентах
// мы созд функц Reducer - она ответственна за изменение данных в хранилище
// компоненты запускают actions это js {} - и они идут в функц reducer

// - состояние для нескольких компонентов - состоян влияющ на несколько компонентов (например появление и исчезновение  модального окна)
// - соcтояние уровня приложения - (например состояние статуса аутентифик пользователя) - состоянре влияющее почти на все компоненты
// - локальное состояние - данные одного компонента (например ввод данных)

// React Context - тоже можно упралять состояниями
// минусы - сложность создания большого приложения, снижение производительности, плохо для состояний которые меняются очень часто

// npm init -y
// npm install redux

// first create func reducer - (simply js func)
// input data: old data + send Action and automatic call reduxs library
// return new object state
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

// create store
const store = redux.legacy_createStore(counterReducer);

// console.log(store.getState()); // { counter: 1 }

const counterSubscriber = () => {
  const newState = store.getState(); // get update state
  console.log(newState);
};

store.subscribe(counterSubscriber);

// send action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
