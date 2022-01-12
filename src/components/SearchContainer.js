import React from "react";
import styled from "styled-components";
import SeiyuuCard from "./SeiyuuCard";

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
          <h2>This is the Search Container component</h2>
          {seiyuu.map((sei) => (
            <SeiyuuCard
              key={sei.mal_id}
              name={sei.name}
              famName={sei.family_name}
              givenName={sei.given_name}
              imgSrc={sei.images.jpg.image_url}
            />
          ))}
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
