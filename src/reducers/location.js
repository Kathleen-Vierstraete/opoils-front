import { SAVE_DEPARTEMENTS, SAVE_REGIONS } from '../actions/location';

const initialState = {
  departements: [],
  regions: [],
};

const locationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DEPARTEMENTS:
      return {
        ...state,
        departements: action.departements,
      };
    case SAVE_REGIONS:
      return {
        ...state,
        regions: action.regions,
      };
    default:
      return state;
  }
};

export default locationReducer;
