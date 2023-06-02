import axios from 'axios';
import { FETCH_REGIONS, saveRegions } from '../actions/location';

export const regionsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_REGIONS:
      axios.get('https://geo.api.gouv.fr/regions/')
        .then((response) => {
          store.dispatch(saveRegions(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:

      next(action);
  }
};

export default regionsMiddleware;
