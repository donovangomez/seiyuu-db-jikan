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

const Input = styled.input`
  padding: 0.35rem;
  flex: 3;
  width: 99%;
  margin-right: 0.25rem;
  font-size: 1.25rem;
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
        <button onClick={handleSearch}>search</button>
      </ButtonWrapper>
    </FormContainer>
  );
}
