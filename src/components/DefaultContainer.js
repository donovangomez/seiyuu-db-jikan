import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  background-color: green;
  margin: 0 auto;
`;

export default function DefaultContainer({ topSeiyuu }) {
  console.log(topSeiyuu);
  return (
    <section>
      <h2>This is the default container</h2>
      <Wrapper>
        {topSeiyuu.map((va) => (
          <div key={va.mal_id}>
            <h2>{va.name}</h2>
            <h2>
              {va.family_name} {va.given_name}
            </h2>
            <img src={va.images.jpg.image_url} />
          </div>
        ))}
      </Wrapper>
    </section>
  );
}
