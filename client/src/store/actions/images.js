import {
  ACTION_LOAD_IMAGES,
  ACTION_SAVE_IMAGES,
  ACTION_UPDATE_SEARCH_QUERY,
  ACTION_DISPLAY_SPINNER,
  ACTION_SELECT_IMAGE,
  ACTION_LIKE_IMAGE,
  ACTION_LOAD_FAVORITE_IMAGES,
  ACTION_SAVE_FAVORITE_IMAGES,
} from "../constants/images";

export const loadImages = () => ({
  type: ACTION_LOAD_IMAGES,
});

export const saveImages = (uploadedImages) => ({
  type: ACTION_SAVE_IMAGES,
  payload: uploadedImages,
});

export const updateSearchQuery = (newSearchQuery) => ({
  type: ACTION_UPDATE_SEARCH_QUERY,
  payload: newSearchQuery,
});

export const displaySpinner = (isDisplay) => ({
  type: ACTION_DISPLAY_SPINNER,
  payload: isDisplay,
});

export const selectImage = (selectedImage) => ({
  type: ACTION_SELECT_IMAGE,
  payload: selectedImage,
});

export const likeImage = (likedImage) => ({
  type: ACTION_LIKE_IMAGE,
  payload: likedImage,
});

export const loadFavoriteImages = () => ({
  type: ACTION_LOAD_FAVORITE_IMAGES,
});

export const saveFavoriteImages = (favoriteImages) => ({
  type: ACTION_SAVE_FAVORITE_IMAGES,
  payload: favoriteImages,
});
