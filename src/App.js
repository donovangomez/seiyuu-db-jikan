import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import seiyuu from "./assets/ll-seiyuu.jpg";

const SplashPage = styled.section`
  min-height: 100vh;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const FlexLeft = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  background-color: #fddddd;
`;

const FlexRight = styled.div`
  flex: 1;
  background-image: url("${seiyuu}");
  background-size: cover;
  background-position: center;
`;

const FlexContent = styled.div``;

const Header = styled.h1`
  font-size: 3rem;
  margin: 2rem 0;
`;

const Text = styled.p`
  font-size: 1.25rem;
  margin: 1rem 0;
`;

const ExLink = styled.a`
  text-decoration: none;
  color: #222;
  padding: 0.55rem 1rem;
  border: 2px solid #f15478;
  transition: 0.3s;

  &:hover {
    background-color: #f15478;
    color: #eee;
  }
`;

const SearchButton = styled(Link)`
  text-decoration: none;
  color: #eee;
  background-color: #f38db7;
  padding: 0.55rem 1rem;
  transition: 0.3s;

  &:hover {
    background-color: #f15478;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

function App() {
  return (
    <SplashPage>
      <FlexLeft>
        <FlexContent>
          <Header>Search Seiyuu</Header>
          <Text>Learn more about your favorite voice actress</Text>
          <ButtonContainer>
            <SearchButton to="./search">Search Seiyuu!</SearchButton>
            <ExLink
              href="https://github.com/donovangomez/seiyuu-db-jikan"
              target="_blank"
            >
              GitHub
            </ExLink>
          </ButtonContainer>
        </FlexContent>
      </FlexLeft>
      <FlexRight></FlexRight>
    </SplashPage>
  );
}

export default App;
