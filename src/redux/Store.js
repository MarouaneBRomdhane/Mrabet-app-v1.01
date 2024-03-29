import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "./Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
