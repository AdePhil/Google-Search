import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./autocomplete.scss";
const initialSuggestions = [
  "David",
  "Damien",
  "Davidds",
  "Damienfef",
  "sarah",
  "jane"
];
const AutoComplete = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  let history = useHistory();

  const handleChange = e => {
    const value = e.target.value;
    setValue(value);
    let suggestions = [];
    if (value.trim()) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = initialSuggestions
        .sort()
        .filter(suggestion => regex.test(suggestion));
    }

    setSuggestions(suggestions);
  };
  const handleSelectedSuggestions = suggestion => {
    setValue(suggestion);
    setSuggestions([]);
    history.push(`/${suggestion}`);
  };
  return (
    <div className="autocomplete ">
      <div className="input-wrapper">
        <input type="text" onChange={handleChange} value={value} />
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="search-icon"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <img src="/michrophone.png" alt="" className="michrophone" />
      </div>
      <ul className="suggestions">
        {suggestions.map((suggestion, i) => (
          <li
            key={`${suggestions}-${i}`}
            className="suggestions__item"
            onClick={() => handleSelectedSuggestions(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
