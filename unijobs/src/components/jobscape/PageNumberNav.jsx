import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../components-css/jobscape/PageNumberNav.css";

const PageNumberNav = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5; // Maximum number of pages to show

  const pageNumbers = [];
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (totalPages <= maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= Math.floor(maxPagesToShow / 2)) {
    endPage = maxPagesToShow;
  } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
    startPage = totalPages - maxPagesToShow + 1;
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="PageNumberNav">
      <div className="Arrow" onClick={() => handlePageClick(currentPage - 1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="PageNumbers">
        {pageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            className={`PageNumber ${
              pageNumber === currentPage ? "CurrentPage" : ""
            }`}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </div>
        ))}
      </div>
      <div className="Arrow" onClick={() => handlePageClick(currentPage + 1)}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default PageNumberNav;
