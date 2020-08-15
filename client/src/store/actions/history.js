import {
  ACTION_LOAD_SEARCH_HISTORY,
  ACTION_SAVE_SEARCH_HISTORY,
  ACTION_ADD_SEARCH_QUERY,
} from "../constants/history";

export const loadSearchHistory = () => ({
  type: ACTION_LOAD_SEARCH_HISTORY,
});

export const saveSearchHistory = (searchHistory) => ({
  type: ACTION_SAVE_SEARCH_HISTORY,
  payload: searchHistory,
});

export const addSearchQuery = (searchQuery) => ({
  type: ACTION_ADD_SEARCH_QUERY,
  payload: searchQuery,
});
