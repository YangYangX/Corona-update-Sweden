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

import { handleActions, combineActions } from "redux-actions";
import { fromJS } from "immutable";
import * as _ from "lodash";

import {
  fetchPostsStart,
  fetchPostsFailure,
  fetchPostsSuccess
} from "../actions";

import { sortData } from "../actions";

// the initial state of the application
const initialState = fromJS({ payload: {}, loading: false });

export default handleActions(
  {
    [fetchPostsStart]: (state, action) =>
      state
        .set("payload", fromJS(action.payload.payload))
        .set("loading", fromJS(action.payload.loading)),
    [fetchPostsFailure]: (state, action) => state.mergeDeep(action.payload),
    [fetchPostsSuccess]: (state, action) => state.mergeDeep(action.payload),
    [sortData]: (state, action) =>
      state.setIn(
        ["payload", "states"],
        _.sortBy(state.getIn(["payload", "states"], []), action.payload.index)
      )
  },
  initialState
);
