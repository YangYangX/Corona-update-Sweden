/**
 * App actions
 *
 * These actions are the only way the application change/update its state.
 * this will guarantee that the application state will not be messed up.
 *
 * To add a new action:
 *
 * 1) import constant
 * 2) add a action creator function:
 *    export actionCreater = var -> {type: ACTION_CONSTANT, var: var}
 */

import { createAction, createActions } from "redux-actions";
import {
  AXIOS_FETCH_POSTS_REQUEST,
  AXIOS_FETCH_POSTS_START,
  AXIOS_FETCH_POSTS_FAILURE,
  AXIOS_FETCH_POSTS_SUCCESS,
  SORT_DATA
} from "./constants";

/**
 * Create action
 *
 * @param {string} action name
 *
 * @return {object} An action object
 */
export const fetchPostsRequest = createAction(AXIOS_FETCH_POSTS_REQUEST,
    (countryCode) => ({ countryCode }));
export const fetchPostsStart = createAction(AXIOS_FETCH_POSTS_START,
    () => ({ payload: {},loading: true }));
export const fetchPostsFailure = createAction(AXIOS_FETCH_POSTS_FAILURE,
    () => ({ payload: {},loading: false }));
export const fetchPostsSuccess = createAction(AXIOS_FETCH_POSTS_SUCCESS,
    (payload) => ({ payload: payload,loading: false }));

export const sortData = createAction(SORT_DATA,
    (index) => ({ index }));
