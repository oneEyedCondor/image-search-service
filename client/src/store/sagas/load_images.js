import { takeEvery, select, call, put } from "redux-saga/effects";
import { ACTION_LOAD_IMAGES } from "../constants/images";
import { saveImages, displaySpinner } from "../actions/images";

const fetchImages = async (searchQuery) => {
  const url = `http://localhost:4000/api/images?search=${searchQuery}`;
  const response = await fetch(url);
  return response.json();
};

function* workerLoadImages() {
  yield put(saveImages([]));

  yield put(displaySpinner(true));

  const { searchQuery } = yield select((state) => state.images);
  const uploadedImages = yield call(fetchImages, searchQuery);

  localStorage.setItem("uploaded-images", JSON.stringify(uploadedImages));
  yield put(saveImages(uploadedImages));

  yield put(displaySpinner(false));
}

export default function* watchLoadImages() {
  yield takeEvery(ACTION_LOAD_IMAGES, workerLoadImages);
}
