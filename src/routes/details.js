import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { marked } from "marked";

const Section = styled.section`
  min-height: 100vh;
`;

const SeiyuuWrapper = styled.div`
  background-color: #edf2f7;
  width: 85%;
  margin: 0 auto;
`;

const SeiyuuImage = styled.img`
  width: 60%;
  height: auto;
`;

const ImgWrapper = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;

const SeiyuuHeader = styled.div`
  display: flex;
`;

const Name = styled.h1`
  font-size: 5rem;
`;

const JpName = styled.h2`
  font-size: 4rem;
`;

const NameWrapper = styled.div`
  flex: 1;
`;

const About = styled.div`
  font-size: 1.15rem;
`;

export default function Details() {
  const [actress, setActress] = useState("");
  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    "https://pbs.twimg.com/media/FI8DFOcXIAs2dnB?format=jpg&name=large"
  );
  const [markdown, setMarkdown] = useState("");
  const { id } = useParams();

  const fetchActress = async () => {
    setLoading(true);
    const res = await fetch("https://api.jikan.moe/v4/people/" + id);
    const data = await res.json();
    console.log(data.data);
    setActress(data.data);
    setImgSrc(data.data.images.jpg.image_url);
    setMarkdown(marked(data.data.about));
    setLoading(false);
  };

  useEffect(() => {
    fetchActress();
  }, []);

  return (
    <div>
      {loading ? (
        <Section>
          <h2>Loading yo</h2>
        </Section>
      ) : (
        <Section>
          <SeiyuuWrapper>
            <SeiyuuHeader>
              <ImgWrapper>
                <SeiyuuImage src={imgSrc} />
              </ImgWrapper>
              <NameWrapper>
                <Name>{actress.name}</Name>
                <JpName>
                  {actress.family_name}
                  {actress.given_name}
                </JpName>
              </NameWrapper>
            </SeiyuuHeader>
            <div>
              <h2>Biography</h2>
              <About dangerouslySetInnerHTML={{ __html: markdown }} />
            </div>
          </SeiyuuWrapper>
        </Section>
      )}
    </div>
  );
}
