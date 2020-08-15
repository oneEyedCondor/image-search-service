import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Pagination from "./Pagination";
import "../styles/HistoryPage.scss";

export default ({ searchHistory, loadImages, updateSearchQuery }) => {
  const browserHistory = useHistory();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSearchHistory = searchHistory.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const clickHandler = (searchQuery) => {
    updateSearchQuery(searchQuery);
    loadImages();

    browserHistory.push("/");
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="search-history">
      <h1>search history</h1>

      {currentSearchHistory.length ? (
        currentSearchHistory.map((searchQuery) => (
          <p
            className="search-query"
            key={uuidv4()}
            onClick={() => clickHandler(searchQuery.value)}
          >
            <span>{searchQuery.date}</span>
            <span>{searchQuery.time}</span>
            <span>{searchQuery.value}</span>
          </p>
        ))
      ) : (
        <p className="isempty-message">Search history is empty ...</p>
      )}

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={searchHistory.length}
        paginate={paginate}
      />
    </div>
  );
};
