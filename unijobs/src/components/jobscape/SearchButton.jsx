import React from "react";

const SearchButton = ({ handleClick, bgColor, src }) => (
  <button
    className="search-button"
    onClick={handleClick}
    style={{
      width: "auto",
      height: "5%",
      padding: "6px 10px",
      borderRadius: "0 10px 10px 0",
      border: "1px solid #2D4877",
      marginLeft:"0",
      backgroundColor: bgColor,
    }}
  >
    <img src={src} alt="Search" style={{paddingTop: "5px"}}/> {/* Use the src prop for dynamic image */}
  </button>
);

export default SearchButton;
