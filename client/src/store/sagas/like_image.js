import { takeEvery, select, call } from "redux-saga/effects";
import { ACTION_LIKE_IMAGE } from "../constants/images";

const addLikedImage = async (selectedImage) => {
  const url = `http://localhost:4000/api/images/favorite`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(selectedImage),
  });
};

function* workerLikeImage() {
  const { selectedImage } = yield select((state) => state.images);
  yield call(addLikedImage, selectedImage);
}

export default function* watchLikeImage() {
  yield takeEvery(ACTION_LIKE_IMAGE, workerLikeImage);
}
