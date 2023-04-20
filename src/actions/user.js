export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const KEEP_SESSION = 'KEEP_SESSION';
export const LEAVE_SESSION = 'LEAVE_SESSION';

export const changeLoginField = (newValue, identifier) => ({
  type: CHANGE_LOGIN_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveAuthData = (nickname, token) => ({
  type: SAVE_AUTH_DATA,
  nickname: nickname,
  token: token,
});

export const keepSession = (authToken) => ({
  type: KEEP_SESSION,
  authToken: authToken,
});
