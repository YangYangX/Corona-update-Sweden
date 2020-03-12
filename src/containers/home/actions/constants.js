/**
 * App constants
 *
 * Each action has a corresponding type, which the reducer knows and handle it.
 * To avoid weird typos between reducer and actions, all the action type should
 * be saved as constants.
 *
 * Prefix rules for action type constant will be something like 'project/component'
 * this will avoid reducers accidentally picking up actions they shouldn't.
 *
 * Follow format:
 * export const ACTION_CONTSTANT = 'project/container/ACTION_CONSTANT'
 */
// Query data from server
export const AXIOS_FETCH_POSTS_REQUEST = 'coronavirusupdate/dataprovider/AXIOS_FETCH_POSTS_REQUEST';
export const AXIOS_FETCH_POSTS_START = 'coronavirusupdate/dataprovider/AXIOS_FETCH_POSTS_START';
export const AXIOS_FETCH_POSTS_SUCCESS = 'coronavirusupdate/dataprovider/AXIOS_FETCH_POSTS_SUCCESS';
export const AXIOS_FETCH_POSTS_FAILURE = 'coronavirusupdate/dataprovider/AXIOS_FETCH_POSTS_FAILURE';

export const SORT_DATA = "coronavirusupdate/dataprovider/SORT_DATA";