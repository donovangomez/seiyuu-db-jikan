import React from "react";
import styled from "styled-components";
import SeiyuuCard from "./SeiyuuCard";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  padding: 2rem 0;
`;

const CardLink = styled(Link)`
  color: #4a5568;
  text-decoration: none;
`;

export default function DefaultContainer({ topSeiyuu, loading, setLoading }) {
  console.log(topSeiyuu);
  return (
    <section>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Header>
            <h2>Popular Today</h2>
          </Header>
          <Wrapper>
            {topSeiyuu.map((va) => (
              <CardLink key={va.mal_id} to={`/seiyuu/${va.mal_id}`}>
                <SeiyuuCard
                  name={va.name}
                  famName={va.family_name}
                  givenName={va.given_name}
                  imgSrc={va.images.jpg.image_url}
                />
              </CardLink>
            ))}
          </Wrapper>
        </>
      )}
    </section>
  );
}
