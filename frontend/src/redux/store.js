import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";

import { AppReducer } from "./reducer";
import { thunk } from "redux-thunk";

const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  AppReducer,
  composeInhancer(applyMiddleware(thunk))
);
