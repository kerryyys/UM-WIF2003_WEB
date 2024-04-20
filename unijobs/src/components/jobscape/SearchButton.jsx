import React from "react";

const SearchButton = ({ handleClick, src }) => (
  <button
    className="search-button"
    onClick={handleClick}
    style={{
      width: "auto",
      height: "5%",
      padding: "3px 10px",
      borderRadius: "0 10px 10px 0",
      border: "1px solid #2D4877",
      backgroundColor: "#80D1D5",
    }}
  >
    <img src={src} alt="Search" /> {/* Use the src prop for dynamic image */}
  </button>
);

export default SearchButton;
