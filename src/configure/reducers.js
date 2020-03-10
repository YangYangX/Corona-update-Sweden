/**
 * reducer
 *
 * appReducer:
 * reducer defined for application.
 *
 * routerReducer:
 * the reducer merges route location changes into the immutable state,
 * this part is handled by react-router-redux.
 */

 import { combineReducers } from 'redux-immutable';
 import { connectRouter } from 'connected-react-router/immutable';

import frameworkReducer  from '../containers/framework/reducers';

 /**
  * Create the main reducer with appReducer and routeReducer
  */
 const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    framework: frameworkReducer
  });
  
  export default rootReducer;
