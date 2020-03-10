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

export const frameworkSelector = state => state.getIn(["framework"], fromJS({}));

export const languageSelector = createSelector(frameworkSelector, frameworkSelector =>
    frameworkSelector.get("language", "cn")
);
