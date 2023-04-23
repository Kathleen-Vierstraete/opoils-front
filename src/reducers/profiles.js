import { SAVE_DOGS_PROFILES,SAVE_MEMBERS_PROFILES, SAVE_ACCOUNT_PROFILES } from '../actions/profiles';

export const initialState = {
  members: [],
  dogs: [],
  favorites: [],
  isProfilesLoaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DOGS_PROFILES:
      return {
        ...state,
        dogs: action.profiles,
        isProfilesLoaded: true,
      };

    case SAVE_MEMBERS_PROFILES:
      return {
        ...state,
        members: action.profiles,
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
