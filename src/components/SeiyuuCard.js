import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 20rem;
  margin: 0.55rem;
`;

export default function SeiyuuCard({ key, name, famName, givenName, imgSrc }) {
  return (
    <Card key={key}>
      <img src={imgSrc} alt={name} />
      <h2>{name}</h2>
      <h2>
        {famName}
        {givenName}
      </h2>
    </Card>
  );
}
