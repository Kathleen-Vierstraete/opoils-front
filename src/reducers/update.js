import { UPDATE_DOG_NAME, UPDATE_DOG_INFOS, UPDATE_DOG_MAIN_PICTURE, UPDATE_DOG_SECOND_PICTURE, UPDATE_DOG_THIRD_PICTURE, UPDATE_DOG_FOURTH_PICTURE, UPDATE_MEMBER_PRESENTATION, UPDATE_MEMBER_LOCATION, UPDATE_MEMBER_PICTURE } from '../actions/update';

export const initialState = {
  isLogged: false,
  email: '',
  password: '',
  pseudo: '',
  token: '',
  authToken: localStorage.getItem('authToken'),
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_DOG_NAME:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case UPDATE_DOG_INFOS:
      return {
        ...state,
        isLogged: true,
        pseudo: action.pseudo,
        token: action.token,
        email: '',
        password: '',
      };

    case UPDATE_DOG_MAIN_PICTURE:
      return {
        ...state,
        isLogged: true,
      };

    case UPDATE_DOG_SECOND_PICTURE:
      return {
        ...state,
        isLogged: false,
        email: '',
        password: '',
        pseudo: '',
        token: '',
      };

    case UPDATE_DOG_SECOND_PICTURE:
      return {
        ...state,
        isLogged: false,
        email: '',
        password: '',
        pseudo: '',
        token: '',
      };

    case UPDATE_DOG_THIRD_PICTURE:
      return {
        ...state,
        isLogged: false,
        email: '',
        password: '',
        pseudo: '',
        token: '',
      };

    case UPDATE_DOG_FOURTH_PICTURE:
      return {
        ...state,
        isLogged: false,
        email: '',
        password: '',
        pseudo: '',
        token: '',
      };

    case UPDATE_MEMBER_PRESENTATION:
      return {
        ...state,
        isLogged: false,
        email: '',
        password: '',
        pseudo: '',
        token: '',
      };

      case UPDATE_MEMBER_LOCATION:
        return {
          ...state,
          isLogged: false,
          email: '',
          password: '',
          pseudo: '',
          token: '',
        };
    
    case UPDATE_MEMBER_PICTURE:
      return {
        ...state,
        isLogged: false,
        email: '',
        password: '',
        pseudo: '',
        token: '',
      };

    default:
      return state;
  }
};

export default reducer;
