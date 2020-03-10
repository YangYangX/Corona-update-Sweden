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
import { CHANGE_LANGUAGE } from "./constants";
//
import i18n from "i18next";

export const changeLanguage = createAction(CHANGE_LANGUAGE, language => {
  i18n.changeLanguage(language);
  return { language: language };
});
