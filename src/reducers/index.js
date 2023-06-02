import { combineReducers } from 'redux';

import profilesReducer from './profiles';
import userReducer from './user';
import locationReducer from './location';

const rootReducer = combineReducers({

  profiles: profilesReducer,
  user: userReducer,
  location: locationReducer,
});

export default rootReducer;
