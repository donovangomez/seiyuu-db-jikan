import React from "react";
import styled from "styled-components";

export default function SearchContainer({ seiyuu, setSeiyuu }) {
  return (
    <section>
      <h2>This is the Search Container component</h2>
      {seiyuu.map((sei) => (
        <div>
          <h2>{sei.name}</h2>
          <img src={sei.images.jpg.image_url} />
        </div>
      ))}
    </section>
  );
}
