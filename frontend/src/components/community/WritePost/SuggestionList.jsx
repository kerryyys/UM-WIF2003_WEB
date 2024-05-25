import React from "react";
import PropTypes from "prop-types";

const SuggestionsList = ({ suggestions, onSelectUser }) => {
  return (
    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto shadow-lg">
      {suggestions.map((user) => (
        <li
          key={user.id}
          onClick={() => onSelectUser(user)}
          className="p-2 hover:bg-gray-100 cursor-pointer"
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
};

SuggestionsList.propTypes = {
  suggestions: PropTypes.array.isRequired,
  onSelectUser: PropTypes.func.isRequired,
};

export default SuggestionsList;
