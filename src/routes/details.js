import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Details() {
  const [actress, setActress] = useState("");
  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    "https://pbs.twimg.com/media/FI8DFOcXIAs2dnB?format=jpg&name=large"
  );
  const { id } = useParams();

  const fetchActress = async () => {
    setLoading(true);
    const res = await fetch("https://api.jikan.moe/v4/people/" + id);
    const data = await res.json();
    console.log(data.data);
    setActress(data.data);
    setImgSrc(data.data.images.jpg.image_url);
    setLoading(false);
  };

  useEffect(() => {
    fetchActress();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading yo</h2>
      ) : (
        <div>
          <h2>{actress.name}</h2>
          <img src={imgSrc} />
          <p>{actress.about}</p>
        </div>
      )}
      {/* PICTURE BECOMES UNDEFINED ON PAGE LOAD FIX!!!! */}
    </div>
  );
}
