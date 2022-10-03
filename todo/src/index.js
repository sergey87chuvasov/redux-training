import { createStore } from 'redux';

let nextTodoId = 0;

// create reducer - todo list , concat or ...spread
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: ++nextTodoId,
          title: action.title,
          completed: false,
        },
      ];
    }

    case 'TOGGLE_TODO': {
      return state.map((todo) =>
        todo.id === action.todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    }

    default: {
      return state;
    }
  }
};

// for localStorage
const defaultValues = [
  { id: 0, title: 'hello', completed: false },
  { id: 1, title: 'hello2', completed: false },
];

// we want add and dell dodos
const store = createStore(todos, defaultValues);

// create a little bit actions AS A FUNCTION WHICH should return {} - ACTION CREATORS

// old
// const addTodo1 = () => {
//   return {
//     type: "ADD_TODO"
//   }
// }

// modern SYNTAX
const addTodo = (title) => ({
  type: 'ADD_TODO',
  title,
});

// change status in some todo
const toggleTodo = (todoId) => ({
  type: 'TOGGLE_TODO',
  todoId,
});

console.log(store.getState()); // [] - our original state

store.dispatch(addTodo('Learn React'));
console.log(store.getState()); // [ 0{id: 1, title: 'Learn React', completed: false} ]

store.dispatch(addTodo('Learn Redux'));
console.log(store.getState()); // [ {...}, {...} ] - 2 objects

store.dispatch(toggleTodo(1));
console.log(store.getState()); // [ {completed: true...}, {completed: false...} ] - 2 objects
