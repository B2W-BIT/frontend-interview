import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from '../middlewares/api';
import createLogger from 'redux-logger';
import { devTools, persistState } from 'redux-devtools';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger({
  actionTransformer: (action) => {
    return Object.assign({}, action, {
      type: String(action.type),
    });
  },
});

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    apiMiddleware,
    loggerMiddleware
  ),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
