import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SplashPage = styled.section`
  min-height: 100vh;
  display: flex;
`;

const FlexLeft = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;

const FlexRight = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;

const FlexContent = styled.div`
  border: 2px solid red;
`;

function App() {
  return (
    <SplashPage>
      <FlexLeft>
        <FlexContent>
          <h1>Poggers</h1>
          <Link to="./search">Search Seiyuu!</Link>
        </FlexContent>
      </FlexLeft>
      <FlexRight>
        <p>RIKYAKOOOO</p>
      </FlexRight>
    </SplashPage>
  );
}

export default App;
