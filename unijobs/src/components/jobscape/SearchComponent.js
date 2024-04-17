import React from 'react';

// SearchBar component
//when use in js, <SearchBar placeholder="Search..." handleChange={handleSearchChange} />
const SearchBar = ({ placeholder, handleChange }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

// CategoryBar component
// declare in page js
// const categories = ["Web Development", "Photographic", "Content Writing"];
// <CategoryBar categories={categories} handleCategoryChange={handleCategoryChange} />
const CategoryBar = ({ categories, handleCategoryChange }) => (
  <div className="category-bar">
  <select className="category" onChange={handleCategoryChange}>
    <option value="">All Categories</option>
    {categories.map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
    <img src='./asset/icons/icon_setting.svg' />
</div>

);

// SearchButton component
const SearchButton = ({ handleClick }) => (
  <button className="search-button" onClick={handleClick}>
    <img src='./asset/icons/icon_search.svg'/>
  </button>
);

export { SearchBar, CategoryBar, SearchButton };
