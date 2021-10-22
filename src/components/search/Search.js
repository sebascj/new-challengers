import { useState, useEffect } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  font-family: "Hind Vadodara", sans-serif;
  font-size: 1.5em;
  color: var(--text-gray);
  border: 2px solid var(--theme-red);
  height: 50px;
  width: 50%;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

function Search({ category, onSearch }) {
  const [query, setQuery] = useState("");
  const search = async (query) => {
    try {
      const searchResult = await fetch("/.netlify/functions/search", {
        method: "POST",
        body: JSON.stringify({ query: `${category} ${query || ""}` }),
      });
      const data = await searchResult.json();
      if (onSearch) {
        onSearch(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    search();
  }, []);
  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        value={query}
        placeholder="Hey There! Search for Robots, Computers, Video Games..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            search(query);
          }
        }}
      />
    </SearchWrapper>
  );
}
export default Search;
