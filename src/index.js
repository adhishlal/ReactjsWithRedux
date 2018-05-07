import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import App from './App';


import {createStore, combineReducers, applyMiddleware} from "redux";

const initialStateMath = {
    result: 1,
    lastValues: []
};

const initialStateUser = {
    name: "Rajiv",
    age: 30,
    lastValues: []
};



const mathReducer = (state = initialStateMath, action) => {
  switch(action.type)
  {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      }

      break;
    case "SUBTRACT":
    state = {
      ...state,
      result: state.result - action.payload,
      lastValues: [...state.lastValues, action.payload]
    }

        break;
    default:
  }
  return state;
};

const userReducer = (state = initialStateUser, action) => {
  switch(action.type)
  {
    case "NAME":
      state = {
        ...state,
        name: action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;

      case "AGE":
        state = {
          ...state,
          age: action.payload,
          lastValues: [...state.lastValues, action.payload]
        }
        break;

    default:
  }
  return state;
};

const myLogger = (store) => (next) => (action) => {
  console.log("Logger Action: ", action);
  next(action);
}

const store = createStore(combineReducers({math: mathReducer, user: userReducer}), {}, applyMiddleware(myLogger));

store.subscribe(() =>
{
  console.log("Store updated! ", store.getState());
});

const actionSum = {
  type: "ADD",
  payload: 10,
}
store.dispatch(actionSum);

const actionSumA = {
  type: "ADD",
  payload: 10,
}
store.dispatch(actionSumA);

const actionSub = {
  type: "SUBTRACT",
  payload: 1,
}
store.dispatch(actionSub);

const actionSubA = {
  type: "SUBTRACT",
  payload: 1,
}
store.dispatch(actionSubA);

const actionUser = {
  type: "NAME",
  payload: "Adhish",
}
store.dispatch(actionUser);

const actionUserAge = {
  type: "AGE",
  payload: 20,
}
store.dispatch(actionUserAge);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
