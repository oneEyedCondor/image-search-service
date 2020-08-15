import {
  ACTION_SAVE_IMAGES,
  ACTION_UPDATE_SEARCH_QUERY,
  ACTION_DISPLAY_SPINNER,
  ACTION_SELECT_IMAGE,
  ACTION_SAVE_FAVORITE_IMAGES,
  ACTION_LIKE_IMAGE,
} from "../constants/images";

const setInitialStateOfImages = () => {
  const savedImages = localStorage.getItem("uploaded-images");
  return savedImages ? JSON.parse(savedImages) : [];
};

const initialState = {
  images: setInitialStateOfImages(),
  favoriteImages: [],
  searchQuery: "",
  loading: false,
  selectedImage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SAVE_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case ACTION_UPDATE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case ACTION_DISPLAY_SPINNER:
      return {
        ...state,
        loading: action.payload,
      };
    case ACTION_SELECT_IMAGE:
      return {
        ...state,
        selectedImage: action.payload,
      };
    case ACTION_SAVE_FAVORITE_IMAGES:
      return {
        ...state,
        favoriteImages: action.payload,
      };
    case ACTION_LIKE_IMAGE:
      return {
        ...state,
        favoriteImages: [...state.favoriteImages, action.payload],
      };
    default:
      return state;
  }
};
