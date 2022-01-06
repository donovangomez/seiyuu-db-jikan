import React from "react";

export default function Form({
  searchSeiyuu,
  seiyuu,
  setSeiyuu,
  setSearchInput,
  searchInput,
  handleSearch,
}) {
  return (
    <div>
      <form>
        <input
          type="text"
          value={searchInput}
          placeholder="search character"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>search</button>
      </form>
    </div>
  );
}
