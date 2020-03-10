/**
 * appReducer
 *
 * Reducer that takes care of our data. Using actions to change
 * application state.
 *
 * To add a new action, add it to the switch statement in the
 * reducer function.
 *
 * Example:
 * case ACTION_CONSTANT:
 *   return state.set('someThing',true);
 *
 */

import { handleActions, combineActions } from 'redux-actions';
import { fromJS } from 'immutable';

import { changeLanguage } from '../actions';

// the initial state of the application
const initialState = fromJS({ language: "en" });

export default handleActions(
    {
        [combineActions(changeLanguage)]:
            (state, action) => state.merge(action.payload)
    },
    initialState
);