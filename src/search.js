import React from "react";
import "./App.css";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchContainer from "./components/SearchContainer";
import DefaultContainer from "./components/DefaultContainer";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const Wrapper = styled.section`
  min-height: 100vh;
  background-color: #e2e8f0;
`;

const Header = styled.header`
  display: grid;
  place-items: center;
  padding: 5rem;
  background-color: #68438b;
  position: relative;
  z-index: 1;
  color: #fff;
  font-family: "Roboto", sans-serif;
`;

const FormWrapper = styled.div`
  position: relative;
  padding: 1rem 2rem;
  max-width: 30rem;
  background-color: white;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  margin: -2rem auto;
  display: flex;
  justify-content: center;
  z-index: 12;
  border-radius: 5px;
`;

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [seiyuu, setSeiyuu] = useState([]);
  const [topSeiyuu, setTopSeiyuu] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    setLoading(true);
    fetchTopSeiyuu();
    setLoading(false);
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
          <div>
            <SearchContainer
              seiyuu={seiyuu}
              loading={loading}
              setLoading={setLoading}
            />
          </div>
        ) : (
          <div>
            <DefaultContainer
              topSeiyuu={topSeiyuu}
              loading={loading}
              setLoading={setLoading}
            />
          </div>
        )}
      </Wrapper>
    </div>
  );
}
