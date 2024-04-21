import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../components-css/jobscape/PageNumberNav.css";

const PageNumberNav = ({ currentPage, totalPages }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="PageNumberNav">
      <div className="Arrow">
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="PageNumbers">
        {pageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            className={`PageNumber ${
              pageNumber === currentPage ? "CurrentPage" : ""
            }`}
          >
            {pageNumber}
          </div>
        ))}
      </div>
      <div className="Arrow">
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default PageNumberNav;
