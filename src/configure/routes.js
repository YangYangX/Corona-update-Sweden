/**
 *
 * Application Routes
 *
 */

import React, { Component } from 'react';

import { Route, Switch } from 'react-router';

// Import containers
import Home from '../containers/home';
import Document from '../containers/document';
import BlankPage from '../containers/blankPage';
import PageNotFound from '../containers/404NotFound';

const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doc" component={Document} />
        <Route exact path="/blankpage" component={BlankPage} />
        <Route path="" component={PageNotFound} />
    </Switch>
);

export default routes;
