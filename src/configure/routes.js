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
import Countries from '../containers/Countries';

const routes = (
    <Switch>
        <Route exact path="/" component={Countries} />
        <Route exact path="/gdpr" component={GDPRPage} />
        <Route path="/:country" component={Home} />
    </Switch>
);

export default routes;
