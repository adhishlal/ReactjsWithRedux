
import math from './reducers/mathReducer';
import user from './reducers/userReducer';
import {createStore, combineReducers, applyMiddleware} from "redux";

const myLogger = (store) => (next) => (action) => {
  console.log("Logger Action: ", action);
  next(action);
}

const store = createStore(combineReducers({math, user}), {}, applyMiddleware(myLogger));

export default store;
