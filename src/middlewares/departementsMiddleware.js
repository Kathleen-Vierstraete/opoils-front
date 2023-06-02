import axios from 'axios';
import { FETCH_DEPARTEMENTS, saveDepartements } from '../actions/location';

export const departementsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DEPARTEMENTS:
      axios.get('https://geo.api.gouv.fr/departements/')
        .then((response) => {
          store.dispatch(saveDepartements(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:

      next(action);
  }
};

export default departementsMiddleware;
