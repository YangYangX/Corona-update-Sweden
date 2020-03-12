/**
 * Data Provider saga
 */

import { take, call, put, race, all, select } from "redux-saga/effects";
import { delay } from "redux-saga";

import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure
} from "../actions";

import { fetchDataAsync } from "../effects/requests";

export const fetchDataRequestFlow = function* fetchDataRequestFlow(action) {
  // Start to load
  yield put(fetchPostsStart());

  try {
    const { data, timeout } = yield race({
      data: call(fetchDataAsync),
      timeout: call(delay, 10000)
    });
    if (data && data.status == 200) {
      yield put(fetchPostsSuccess(data.data));
    } else {
      throw new Error("Failed to fetch data from github, timeout.");
    }
  } catch (error) {
    yield put(fetchPostsFailure());
  }
};
