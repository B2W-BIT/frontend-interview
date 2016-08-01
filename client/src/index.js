import 'babel-core/polyfill';
import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from './store/configureStore';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import routes from './routes';

const history = createBrowserHistory();
const store = configureStore();
const container = document.getElementById('app-container');

React.render(
  <div>
    <Provider store={store}>
      {() =>
        <Router history={history}>
          {routes}
        </Router>
      }
    </Provider>
  </div>,
  container
);

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  require('./devToolsWindow')(store);
}
