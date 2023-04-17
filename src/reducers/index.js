import { combineReducers } from 'redux';

import profilesReducer from './profiles';
import userReducer from './user';

const rootReducer = combineReducers({

  profiles: profilesReducer,
  user: userReducer,
});

export default rootReducer;
