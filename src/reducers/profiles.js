import { SAVE_PROFILES } from '../actions/profiles';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROFILES:
      return {
        ...state,
        list: action.recipes,
      };

    default:
      return state;
  }
};

export default reducer;
