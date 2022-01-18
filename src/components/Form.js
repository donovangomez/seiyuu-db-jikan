import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
`;

const InputWrapper = styled.div`
  flex: 3;
  border-radius: 5px;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  display: grid;
`;

const Button = styled.button`
  font-size: 1.1rem;
  background-color: transparent;
  color: #68438b;
  cursor: pointer;
  transition: 200ms;

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
    outline: 2px solid #68438b;
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
        <Button onClick={handleSearch}>search</Button>
      </ButtonWrapper>
    </FormContainer>
  );
}
