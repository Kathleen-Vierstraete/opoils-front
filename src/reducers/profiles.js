import { SAVE_DOGS_PROFILES, SAVE_MEMBERS_PROFILES, SAVE_ACCOUNT_DOGS_PROFILES, SAVE_ACCOUNT_MEMBER_PROFILE, ADD_NEW_DOG, SUBMIT_NEW_DOG, DELETE_DOG, UPDATE_DOG_INFOS } from '../actions/profiles';

export const initialState = {
  members: [],
  dogs: [],
  isProfilesLoaded: false,
  accountDogs: [],
  accountMember: [],
};

const profilesReducer = (state = initialState, action = {}) => {
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

    case ADD_NEW_DOG:
      return {
        ...state,
        dogs: [...state.dogs, action.payload],
      };

    case SUBMIT_NEW_DOG:
      return {
        ...state,
      };

    case DELETE_DOG:
      return {
        ...state,
        accountDogs: state.accountDogs.filter((dog) => dog.slug !== action.slug),
      };

    case UPDATE_DOG_INFOS:
      const updatedDogs = state.accountDogs.map((dog) => {
        if (dog.slug === action.slug) {
          return { ...dog, ...action.newDog };
        }
        return dog;
      });
      return {
        ...state,
        accountDogs: updatedDogs,
      };

    default:
      return state;
  }
};

export default profilesReducer;
