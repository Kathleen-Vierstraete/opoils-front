import { CHANGE_LOGIN_FIELD, SAVE_AUTH_DATA, KEEP_SESSION } from '../actions/user';

export const initialState = {
  isLogged: false,
  email: '',
  password: '',
  nickname: '',
  token: '',
  authToken: localStorage.getItem('authToken'),
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SAVE_AUTH_DATA:
      return {
        ...state,
        isLogged: true,
        nickname: action.nickname,
        token: action.token,
        email: '',
        password: '',
      };

    case KEEP_SESSION:
      return {
        ...state,
        isLogged: true,
        nickname: action.nickname,
        token: action.token,
        authToken: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
