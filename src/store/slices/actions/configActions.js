import { SET_ITEMS_PER_PAGE, TOGGLE_DARK_MODE } from './actionTypes';

export const setItemsPerPage = (itemsPerPage) => ({
  type: SET_ITEMS_PER_PAGE,
  payload: itemsPerPage,
});

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});