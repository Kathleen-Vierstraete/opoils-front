import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import profilesMiddleware from '../middlewares/profilesMiddleware';
import userMiddleware from '../middlewares/userMiddleware';
import departementsMiddleware from '../middlewares/departementsMiddleware';
import regionsMiddleware from '../middlewares/regionsMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    profilesMiddleware,
    userMiddleware,
    departementsMiddleware,
    regionsMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
