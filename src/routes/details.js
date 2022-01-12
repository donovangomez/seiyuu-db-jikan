import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Details() {
  const [actress, setActress] = useState("");
  const { id } = useParams();

  const fetchActress = async () => {
    const res = await fetch("https://api.jikan.moe/v4/people/" + id);
    const data = await res.json();
    console.log(data.data);
    setActress(data.data);
  };

  useEffect(() => {
    fetchActress();
  }, []);

  return (
    <div>
      <h2>{actress.name}</h2>
      {/* PICTURE BECOMES UNDEFINED ON PAGE LOAD FIX!!!! */}
      <img src={actress.images.jpg.image_url} />
      <p>{actress.about}</p>
    </div>
  );
}
