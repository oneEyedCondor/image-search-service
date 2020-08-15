import { takeEvery, call } from "redux-saga/effects";
import { ACTION_ADD_SEARCH_QUERY } from "../constants/history";

const saveSearchQuery = async (searchQuery) => {
  const url = `http://localhost:4000/api/search-history`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(searchQuery),
  });
};

function* workerAddSearchQuery({ payload }) {
  yield call(saveSearchQuery, payload);
}

export default function* watchAddSearchQuery() {
  yield takeEvery(ACTION_ADD_SEARCH_QUERY, workerAddSearchQuery);
}
