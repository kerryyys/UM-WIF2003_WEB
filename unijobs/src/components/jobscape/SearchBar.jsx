import React from "react";

const SearchBar = ({ placeholder, handleChange }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
    style={{
      width: "25%",
      height: "5%",
      padding: "12.5px",
      marginRight: "2px",
      borderRadius: "10px 0 0 10px",
      border: "1px solid #2D4877", 
      color: "#2D4877",
      backgroundColor: "#FFFFFF",
      fontSize: "16px",
    }}
  />
);

export default SearchBar;
