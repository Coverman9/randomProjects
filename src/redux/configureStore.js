import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./ducks/counter"

const reducer = combineReducers({
  counter: counterReducer,
});

const store = legacy_createStore(reducer);

export default store;
