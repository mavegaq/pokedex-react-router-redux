import { SET_ITEMS_PER_PAGE, TOGGLE_DARK_MODE } from '../actions/actionTypes';

const initialState = {
  itemsPerPage: 12,
  darkMode: false,
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS_PER_PAGE:
      return { ...state, itemsPerPage: action.payload };
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default configReducer;
