import {
  ACTION_SAVE_SEARCH_HISTORY,
  ACTION_ADD_SEARCH_QUERY,
} from "../constants/history";

const initialState = {
  searchHistory: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SAVE_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: action.payload,
      };
    case ACTION_ADD_SEARCH_QUERY:
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    default:
      return state;
  }
};
