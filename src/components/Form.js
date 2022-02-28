import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  flex: 3;
  border-radius: 5px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  display: grid;
`;

const Button = styled.button`
  font-size: 1.1rem;
  padding: 0.4rem;
  margin: 0;
  height: 100%;
  width: 50px;
  background-color: transparent;
  color: #68438b;
  cursor: pointer;
  transition: 200ms;
  border: 1px solid;

  &:hover {
    background-color: #68438b;
    color: #fff;
  }
`;

const Input = styled.input`
  padding: 0.35rem;
  flex: 3;
  width: 100%;
  font-size: 1.1rem;

  &:focus {
    outline: 1px solid #68438b;
  }
`;

export default function Form({
  searchSeiyuu,
  seiyuu,
  setSeiyuu,
  setSearchInput,
  searchInput,
  handleSearch,
}) {
  return (
    <FormContainer>
      <InputWrapper>
        <Input
          type="text"
          value={searchInput}
          placeholder="Search Rikako Aida"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={handleSearch}>
          <FaSearch />
        </Button>
      </ButtonWrapper>
    </FormContainer>
  );
}
