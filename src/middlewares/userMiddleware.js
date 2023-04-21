import axios from 'axios';
import { fetchAccountProfiles } from '../actions/profiles';
import { saveAuthData, SUBMIT_LOGIN } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        'http://localhost:3001/login',
        {
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          store.dispatch(saveAuthData(response.data.pseudo, response.data.token));
          store.dispatch(fetchAccountProfiles());
          localStorage.setItem('authToken', response.data.token);
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
