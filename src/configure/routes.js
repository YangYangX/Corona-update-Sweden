/**
 *
 * Application Routes
 *
 */

import React, { Component } from 'react';

import { Route, Switch } from 'react-router';

// Import containers
import Home from '../containers/home';
import GDPRPage from '../containers/GDPR';

const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gdpr" component={GDPRPage} />
    </Switch>
);

export default routes;
