import React from "react";

export default function DefaultContainer({ topSeiyuu }) {
  return (
    <section>
      <h2>This is the default container</h2>
      {topSeiyuu.map((va) => (
        <div>
          <h2>{va.name}</h2>
          <img src={va.images.jpg.image_url} />
        </div>
      ))}
    </section>
  );
}
