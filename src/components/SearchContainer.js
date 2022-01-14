import React from "react";
import styled from "styled-components";
import SeiyuuCard from "./SeiyuuCard";

const Wrapper = styled.div`
  width: 90%;
  background-color: #edf2f7;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Header = styled.header`
  width: 90%;
  margin: 0 auto;
`;

export default function SearchContainer({
  seiyuu,
  setSeiyuu,
  loading,
  setLoading,
}) {
  return (
    <section>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <>
          <Header>
            <h2>Search Results</h2>
          </Header>
          <Wrapper>
            {seiyuu.map((sei) => (
              <SeiyuuCard
                key={sei.mal_id}
                name={sei.name}
                famName={sei.family_name}
                givenName={sei.given_name}
                imgSrc={sei.images.jpg.image_url}
              />
            ))}
          </Wrapper>
        </>
      )}
      {/* <h2>This is the Search Container component</h2>
      {seiyuu.map((sei) => (
        <SeiyuuCard
          key={sei.mal_id}
          name={sei.name}
          famName={sei.family_name}
          givenName={sei.given_name}
          imgSrc={sei.images.jpg.image_url}
        />
      ))} */}
    </section>
  );
}
