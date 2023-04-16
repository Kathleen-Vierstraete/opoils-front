import axios from 'axios';
import { FETCH_PROFILES, saveProfiles } from '../actions/profiles';

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
    default:
      next(action);
  }
};

export default profilesMiddleware;
