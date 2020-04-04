import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxInmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; // add support for Redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxInmutableStateInvariant()))
  );
}
