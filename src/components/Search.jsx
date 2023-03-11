import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

const Search = ({ searchUrl }) => {
  const [input, setInput] = useState("");
  return (
    <form
      onSubmit={() => {
        searchUrl(input);
        setInput("");
      }}
    >
      <div>
        <GoSearch className="ico" />
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button type="submit" className="btn">
        Enter
      </button>
    </form>
  );
};

export default Search;
