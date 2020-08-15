import { takeEvery, call, put } from "redux-saga/effects";
import { ACTION_LOAD_SEARCH_HISTORY } from "../constants/history";
import { saveSearchHistory } from "../actions/history";

const fetchSearchHistory = async () => {
  const url = `http://localhost:4000/api/search-history`;
  const response = await fetch(url);
  return response.json();
};

function* workerLoadImages() {
  const searchHistory = yield call(fetchSearchHistory);

  yield put(saveSearchHistory(searchHistory));
}

export default function* watchLoadSearchHistory() {
  yield takeEvery(ACTION_LOAD_SEARCH_HISTORY, workerLoadImages);
}
