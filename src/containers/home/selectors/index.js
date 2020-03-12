/**
 * appSelector
 *
 * Selector is a safe way to read immutable state from redux store.
 *
 * selector api and functions can be referenced from:
 * https://facebook.github.io/immutable-js/
 *
 */

import { createSelector } from "reselect";
import { fromJS } from "immutable";

export const homeSelector = state => state.getIn(["home"], fromJS({payload: {}, loading: false}));

export const dataSelector = createSelector(homeSelector, data =>
  data.get("payload", fromJS({}))
);

export const loadingSelector = createSelector(homeSelector, data =>
    data.get("loading", false)
);
