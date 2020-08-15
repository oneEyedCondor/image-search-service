import React from "react";
import "../styles/Pagination.scss";

const getPageNumbers = (totalItems, itemsPerPage) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};

export default ({ currentPage, totalItems, itemsPerPage, paginate }) => {
  const pageNumbers = getPageNumbers(totalItems, itemsPerPage);
  const displayPagination = pageNumbers.length > 1;

  return (
    <nav className="pagination">
      <ul>
        {displayPagination &&
          pageNumbers.map((number) => (
            <li
              key={number}
              className={
                currentPage === number ? "page-item active" : "page-item"
              }
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}
      </ul>
    </nav>
  );
};
