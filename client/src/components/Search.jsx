import React from "react";
import moment from "moment";
import "../styles/Search.scss";

export default (props) => {
  const {
    searchQuery,
    loadImages,
    updateSearchQuery,
    addSearchQueryToHistory,
  } = props;

  const findImages = () => {
    loadImages();
    addSearchQueryToHistory({
      date: moment().format("DD.MM.YYYY"),
      time: moment().format("h:mm:ss a"),
      value: searchQuery,
    });
  };

  const keyUpHandler = (keyCode) => {
    if (keyCode === 13 && searchQuery.length) {
      findImages();
    }
  };

  return (
    <div className="blc-search">
      <input
        className="field-search"
        value={searchQuery}
        onKeyUp={(e) => keyUpHandler(e.keyCode)}
        onChange={(e) => updateSearchQuery(e.target.value)}
      />
      <button
        className={
          searchQuery.length ? "btn-search" : "btn-search btn-search-disabled"
        }
        disabled={!searchQuery.length}
        onClick={() => findImages()}
      >
        Search
      </button>
    </div>
  );
};
