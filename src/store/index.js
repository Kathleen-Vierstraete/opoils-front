import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import profilesMiddleware from '../middlewares/profilesMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    profilesMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
