import { SAVE_PROFILES, SAVE_ACCOUNT_PROFILES } from '../actions/profiles';

export const initialState = {
  list: [],
  favorites: [],
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

    case SAVE_ACCOUNT_PROFILES:
      return {
        ...state,
        favorites: action.accountProfiles,
      };

    default:
      return state;
  }
};

export default reducer;
