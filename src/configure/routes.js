/**
 *
 * Application Routes
 *
 */

import React, { Component } from 'react';

import { Route, Switch } from 'react-router';

// Import containers
import Home from '../containers/home';

const routes = (
    <Switch>
        <Route path="/" component={Home} />
    </Switch>
);

export default routes;
