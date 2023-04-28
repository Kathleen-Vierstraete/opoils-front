import { UPDATE_DOG_INFOS, UPDATE_DOG_MAIN_PICTURE, UPDATE_DOG_SECOND_PICTURE, UPDATE_DOG_THIRD_PICTURE, UPDATE_DOG_FOURTH_PICTURE, UPDATE_DOG_PRESENTATION, UPDATE_MEMBER_PRESENTATION, UPDATE_MEMBER_LOCATION, UPDATE_MEMBER_PICTURE } from '../actions/update';

export const initialState = {
  main_picture: '',
  name: '',
  size: '',
  personality: '',
  age: '',
  race: '',
  hobbies: [],
  presentation: '',
};

const updateReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_DOG_INFOS:
      return {
        ...state,

      };

    case UPDATE_DOG_MAIN_PICTURE:
      return {
        ...state,

      };

    case UPDATE_DOG_SECOND_PICTURE:
      return {
        ...state,
      };

    case UPDATE_DOG_THIRD_PICTURE:
      return {
        ...state,
      };

    case UPDATE_DOG_FOURTH_PICTURE:
      return {
        ...state,
      };
    case UPDATE_DOG_PRESENTATION:
      return {
        ...state,
      };

    case UPDATE_MEMBER_PRESENTATION:
      return {
        ...state,
      };

    case UPDATE_MEMBER_LOCATION:
      return {
        ...state,
      };

    case UPDATE_MEMBER_PICTURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default updateReducer;
