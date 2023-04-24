import { SAVE_DOGS_PROFILES, SAVE_MEMBERS_PROFILES, SAVE_ACCOUNT_DOGS_PROFILES, SAVE_ACCOUNT_MEMBER_PROFILE } from '../actions/profiles';

export const initialState = {
  members: [],
  dogs: [],
  isProfilesLoaded: false,
  accountDogs:[],
  accountMember:[],
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

      case SAVE_ACCOUNT_DOGS_PROFILES:
        return {
          ...state,
          accountDogs: action.accountDogsProfiles,
        };
      case SAVE_ACCOUNT_MEMBER_PROFILE:
        return {
          ...state,
          accountMember: action.accountMemberProfile,
        };

    default:
      return state;
  }
};

export default reducer;
