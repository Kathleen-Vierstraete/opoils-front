import axios from 'axios';
import { fetchAccountProfiles } from '../actions/profiles';
import { saveAuthData, SUBMIT_LOGIN } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        'http://caroline-georges.vpnuser.lan:8090/api/login_check',
        {
          username: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          store.dispatch(saveAuthData(response.data.pseudo, response.data.token));
          store.dispatch(fetchAccountProfiles());
          sessionStorage.setItem('authToken', response.data.token);
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    default:
      next(action);
  }
};

export default userMiddleware;
