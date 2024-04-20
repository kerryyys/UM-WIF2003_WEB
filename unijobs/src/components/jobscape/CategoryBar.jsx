import React, { useState } from "react";

const CategoryBar = ({ categories, handleCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    handleCategoryChange(event); // Call the provided handleCategoryChange function
  };

  return (
    <div className="category-bar">
      <select
        className="category"
        value={selectedCategory}
        onChange={handleChange}
        style={{
          width: "auto",
          height: "5%",
          padding: "9px",
          marginRight: "2px",
          backgroundColor: "#FDFAF3",
          border: "1px solid #2D4877", 
          fontSize: "16px",
          color: selectedCategory ? "#2D4877" : "#808080",
        }}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryBar;
