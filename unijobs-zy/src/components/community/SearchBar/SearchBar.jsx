import React from "react";
import "../../styles/community/SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar-row">
        <input className="search-bar" type="text" placeholder="Search..." />
        <input className="search-bar" type="text" placeholder="Category" />
        <button type="button" className="btn-search">X</button>
      </div>
    </div>
  );
}

export default SearchBar;
