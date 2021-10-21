import { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const search = async (query) => {
    try {
      const searchResult = await fetch("/.netlify/functions/search", {
        method: "POST",
        body: JSON.stringify({ query: query }),
      });
      const data = await searchResult.json();
      if (onSearch) {
        onSearch(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          search(query);
        }}
      >
        search
      </button>
    </div>
  );
}
export default Search;
