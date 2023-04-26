import { CHANGE_LOGIN_FIELD, SAVE_AUTH_DATA, KEEP_SESSION, LEAVE_SESSION } from '../actions/user';
import { SEND_NEW_ACCOUNT } from '../actions/profiles';
export const initialState = {
  isLogged: false,
  email: null,
  password: null,
  username: null,
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
        pseudo: action.pseudo,
        token: action.token,
        email: '',
        password: '',
      };

    case KEEP_SESSION:
      return {
        ...state,
        isLogged: true,
      };

    case LEAVE_SESSION:
      return {
        ...state,
        isLogged: false,
        email: '',
        password: '',
        username: '',
        token: '',
      };

    case SEND_NEW_ACCOUNT:
      return {
        ...state,
        user: [...state.user, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
