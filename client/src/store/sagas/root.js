import { all } from "redux-saga/effects";
import watchLoadImages from "./load_images";
import watchLoadFavoriteImages from "./load_favorite_images";
import watchLikeImage from "./like_image";
import watchLoadSearchHistory from "./load_search_history";
import watchAddSearchQuery from "./save_search_query";

export default function* rootSaga() {
  yield all([
    watchLoadImages(),
    watchLoadFavoriteImages(),
    watchLikeImage(),
    watchLoadSearchHistory(),
    watchAddSearchQuery(),
  ]);
}
