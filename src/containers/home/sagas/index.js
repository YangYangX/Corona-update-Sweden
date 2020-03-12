/**
 * Root sagas
 */
import { takeLatest, all } from 'redux-saga/effects';

import { AXIOS_FETCH_POSTS_REQUEST } from '../actions/constants';

// Data Saga
import {fetchDataRequestFlow} from './dataSaga';

const rootSaga = function* root() {
    yield all ([
        takeLatest(AXIOS_FETCH_POSTS_REQUEST,fetchDataRequestFlow)
    ]);
};

export default rootSaga;