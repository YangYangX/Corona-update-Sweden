import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ConnectedRouter } from "connected-react-router/immutable";
import ReactGA from 'react-ga';

import configureStore from './configure/configureStore';
import { createHashHistory  } from 'history';

// Load application containers
import Framework from './containers/framework';
import i18n from './assets/languages/i18n';

import "./App.css";
import 'semantic-ui-css/semantic.min.css';

// Create redux store with history
const history = createHashHistory ({hashType:"hashbang"});
const {store} = configureStore(history);

ReactGA.initialize('UA-160278861-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <I18nextProvider i18n={i18n}>
                <Framework />
            </I18nextProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
