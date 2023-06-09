export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_SIGNIN = 'SUBMIT_SIGNIN';
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

export const saveAuthData = (pseudo, token) => ({
  type: SAVE_AUTH_DATA,
  pseudo: pseudo,
  token: token,
});

export const keepSession = (authToken) => ({
  type: KEEP_SESSION,
  authToken: authToken,
});

export const leaveSession = () => ({
  type: LEAVE_SESSION,
});
