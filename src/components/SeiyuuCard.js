import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 25rem;
  margin: 0.55rem;
  display: flex;
`;

const CardLeft = styled.div`
  flex: 1;
`;

const CardRight = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  object-position: center center;
  border-radius: 100%;
`;

export default function SeiyuuCard({ key, name, famName, givenName, imgSrc }) {
  return (
    <Card key={key}>
      <CardLeft>
        <Image src={imgSrc} alt={name} />
      </CardLeft>
      <CardRight>
        <h2>{name}</h2>
        <h2>
          {famName}
          {givenName}
        </h2>
      </CardRight>
    </Card>
  );
}
