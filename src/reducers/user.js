import { CHANGE_LOGIN_FIELD, SAVE_AUTH_DATA } from '../actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  nickname: '',
  token: '',
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
        logged: true,
        nickname: action.nickname,
        token: action.token,
        email: '',
        password: '',
      };

    default:
      return state;
  }
};

export default reducer;
