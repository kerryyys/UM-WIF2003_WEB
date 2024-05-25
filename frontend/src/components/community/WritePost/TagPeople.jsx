import React, { useState } from "react";
import { Form, InputGroup, Badge } from "react-bootstrap";
import SuggestionsList from "./SuggestionsList";

const TagPeople = ({ taggedUsers, setTaggedUsers }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const dummyData = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ];

  // const fetchSuggestions = async (input) => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost/community/users?query=${input}`
  //     );
  //     setSuggestions(response.data);
  //   } catch (error) {
  //     console.error("Error fetching user suggestions:", error);
  //   }
  // };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    if (input) {
      // fetchSuggestions(input);
      const filteredSuggestions = dummyData.filter((user) =>
        user.name.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectUser = (user) => {
    setTaggedUsers((prev) => [...prev, user]);
    setQuery("");
    setSuggestions([]);
  };

  const handleRemoveUser = (user) => {
    setTaggedUsers((prev) => prev.filter((u) => u.id !== user.id));
  };

  return (
    <Form.Group controlId="formPeopleTag" className="relative">
      <Form.Label>Tag People</Form.Label>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Type a name..."
          value={query}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded w-full"
        />
        {suggestions.length > 0 && (
          <SuggestionsList suggestions={suggestions} onSelectUser={handleSelectUser} />
        )}
      </InputGroup>
      <div className="mt-2 flex flex-wrap">
        {taggedUsers.map((user) => (
          <Badge
            key={user.id}
            pill
            variant="primary"
            onClick={() => handleRemoveUser(user)}
            className="bg-blue-500 text-white m-1 p-2 rounded cursor-pointer"
          >
            {user.name} <span>&times;</span>
          </Badge>
        ))}
      </div>
    </Form.Group>
  );
};

export default TagPeople;
