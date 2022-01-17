import React from "react";
import styled from "styled-components";
import SeiyuuCard from "./SeiyuuCard";
import { Link } from "react-router-dom";
import loadingGif from "../assets/tomori.gif";

const Wrapper = styled.div`
  width: 90%;
  background-color: #edf2f7;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LoadingWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const Header = styled.header`
  width: 90%;
  margin: 0 auto;
`;

const CardLink = styled(Link)`
  color: #4a5568;
  text-decoration: none;
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
        <LoadingWrapper>
          <figure>
            <img src={loadingGif} />
            <figcaption>Loading...</figcaption>
          </figure>
        </LoadingWrapper>
      ) : (
        <>
          <Header>
            <h2>Search Results</h2>
          </Header>
          <Wrapper>
            {seiyuu.map((sei) => (
              <CardLink key={sei.mal_id} to={`/seiyuu/${sei.mal_id}`}>
                <SeiyuuCard
                  key={sei.mal_id}
                  name={sei.name}
                  famName={sei.family_name}
                  givenName={sei.given_name}
                  imgSrc={sei.images.jpg.image_url}
                />
              </CardLink>
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
