import React from "react";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchContainer from "./components/SearchContainer";
import DefaultContainer from "./components/DefaultContainer";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [seiyuu, setSeiyuu] = useState([]);
  const [topSeiyuu, setTopSeiyuu] = useState([]);
  const fetchTopSeiyuu = async () => {
    const res = await fetch(
      "https://api.jikan.moe/v4/people?order_by=favorites&sort=desc&limit=15"
    );
    const data = await res.json();
    setTopSeiyuu(data.data);
    console.log(seiyuu);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    searchSeiyuu(searchInput);
    setSearchInput("");
  };
  const searchSeiyuu = async (query) => {
    const res = await fetch(
      `https://api.jikan.moe/v4/people?q=${query}&order_by=favorites&sort=desc`
    );
    const data = await res.json();
    setSeiyuu(data.data);
    console.log(seiyuu);
  };
  useEffect(() => {
    fetchTopSeiyuu();
  }, []);
  return (
    <div>
      <h2>This is the search page</h2>
      <p>sdfdsfasdafasd</p>
      <header>
        <h2>Search Seiyuu</h2>
      </header>
      <Form
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchSeiyuu={searchSeiyuu}
        seiyuu={seiyuu}
        handleSearch={handleSearch}
      />
      {seiyuu.length > 1 ? (
        <SearchContainer seiyuu={seiyuu} />
      ) : (
        <DefaultContainer topSeiyuu={topSeiyuu} />
      )}
    </div>
  );
}
