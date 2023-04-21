import axios from 'axios';
import { FETCH_PROFILES, saveProfiles, FETCH_ACCOUNT_PROFILES, saveAccountProfiles, fetchAccountProfiles } from '../actions/profiles';

const profilesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          store.dispatch(saveProfiles(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case FETCH_ACCOUNT_PROFILES:
      axios.get('http://localhost:3001/favorites',
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveAccountProfiles(response.data.favorites));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  next(action);

};

export default profilesMiddleware;
