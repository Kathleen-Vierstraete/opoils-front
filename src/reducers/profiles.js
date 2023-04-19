import { SAVE_PROFILES } from '../actions/profiles';

export const initialState = {
  list: [],
  isProfilesLoaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROFILES:
      return {
        ...state,
        list: action.profiles,
        isProfilesLoaded: true,
      };

    default:
      return state;
  }
};

export default reducer;
