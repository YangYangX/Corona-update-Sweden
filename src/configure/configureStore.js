/**
 * Create the store with dynamic reducers
 */

import {
    createStore,
    applyMiddleware,
    compose
} from "redux";

import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';

import rootReducer from './reducers';
//import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const initialState = fromJS({});
/**
 * Create and config store for application
 */
export default (history) => {
  // Create store with two middlewares:
  // 1). sagaMiddleware: make redux-saga works.
  // 2). routerMiddleware: Sync the location path to state
  const middlewares = [
      sagaMiddleware,
      routerMiddleware(history)
  ];

  // store enhancer list
  const enhancers = [
      applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed then use it, otherwise use Redux compose

  /*eslint-disable no-underscore-dangle */
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
  /*eslint-enable */

  const store = createStore(
      rootReducer(history),
      initialState,
      composeEnhancers(...enhancers)
  );

  //sagaMiddleware.run(rootSaga);

  // return store
    return { store };
}
