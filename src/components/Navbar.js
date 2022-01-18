import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 5vh;
  background-color: #de4d86;
  color: #fff;
  margin: 0;
  padding: 0;
  top: 0;
`;

const External = styled.a`
  color: black;
`;

const NavList = styled.ul`
  display: flex;

  border: 2px solid red;
  width: 40%;
`;

export default function Navbar() {
  return (
    <Nav>
      <NavList>
        <div>
          <External href="https://www.youtube.com/watch?v=1y5PZ_fqgLM">
            Github
          </External>
        </div>
      </NavList>
    </Nav>
  );
}
