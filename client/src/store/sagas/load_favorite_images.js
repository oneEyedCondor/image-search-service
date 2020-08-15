import { takeEvery, call, put } from "redux-saga/effects";
import { ACTION_LOAD_FAVORITE_IMAGES } from "../constants/images";
import { saveFavoriteImages } from "../actions/images";

const fetchLikedImages = async () => {
  const url = `http://localhost:4000/api/images/favorite`;
  const response = await fetch(url);
  return response.json();
};

function* workerLoadFavoriteImages() {
  const likedImages = yield call(fetchLikedImages);
  yield put(saveFavoriteImages(likedImages));
}

export default function* watchLoadFavoriteImages() {
  yield takeEvery(ACTION_LOAD_FAVORITE_IMAGES, workerLoadFavoriteImages);
}
