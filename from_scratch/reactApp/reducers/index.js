import { combineReducers } from 'Redux';


const counter1 = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const counter2 = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state - 1;
    case 'DECREMENT':
      return state + 1;
    default:
      return state;
  }
}

const counters = combineReducers({
  counter1: counter1,
  counter2: counter2
})

export default counters;
