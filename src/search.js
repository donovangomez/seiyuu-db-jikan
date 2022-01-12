import React from "react";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchContainer from "./components/SearchContainer";
import DefaultContainer from "./components/DefaultContainer";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: gray;
`;

const Header = styled.header`
  display: grid;
  place-items: center;
`;

const FormWrapper = styled.div`
  border: 2px solid red;
  padding: 1rem;
  width: 50%;
  background-color: lightblue;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [seiyuu, setSeiyuu] = useState([]);
  const [topSeiyuu, setTopSeiyuu] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const res = await fetch(
      `https://api.jikan.moe/v4/people?q=${query}&order_by=favorites&sort=desc`
    );
    const data = await res.json();
    setSeiyuu(data.data);
    console.log(seiyuu);
    setLoading(false);
  };
  useEffect(() => {
    fetchTopSeiyuu();
  }, []);
  return (
    <div>
      <Header>
        <h2>Search Seiyuu</h2>
      </Header>
      <Wrapper>
        <FormWrapper>
          <Form
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            searchSeiyuu={searchSeiyuu}
            seiyuu={seiyuu}
            handleSearch={handleSearch}
          />
        </FormWrapper>
        {seiyuu.length > 0 ? (
          <SearchContainer
            seiyuu={seiyuu}
            loading={loading}
            setLoading={setLoading}
          />
        ) : (
          <DefaultContainer topSeiyuu={topSeiyuu} />
        )}
      </Wrapper>
    </div>
  );
}
