import React from "react";
import "./searchBox.css";

export const SearchBox = ({ placeholder, handler }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handler}
    />
  );
};
