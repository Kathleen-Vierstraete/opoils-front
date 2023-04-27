import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import reducer from 'src/reducers';

import profilesMiddleware from '../middlewares/profilesMiddleware';
import userMiddleware from '../middlewares/userMiddleware';
import departementsMiddleware from '../middlewares/departementsMiddleware';
import regionsMiddleware from '../middlewares/regionsMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const enhancers = composeEnhancers(
  applyMiddleware(
    profilesMiddleware,
    userMiddleware,
    departementsMiddleware,
    regionsMiddleware,
  ),
);

// Pass the composed enhancer to createStore()
const store = createStore(persistedReducer, enhancers);

const persistor = persistStore(store);

export { store, persistor };
