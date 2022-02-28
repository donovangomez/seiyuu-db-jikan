import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { marked } from "marked";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import loadingGif from "../assets/tomori.gif";

const Section = styled.section`
  min-height: 100vh;
`;

const LoadingWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const SeiyuuWrapper = styled.div`
  background-color: #edf2f7;
  width: 85%;
  margin: 0 auto;
  padding: 4rem;
`;

const SeiyuuImage = styled.img`
  width: 50%;
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
  font-family: "Roboto", sans-serif;
`;

const JpName = styled.h2`
  font-size: 4rem;
  font-family: "Roboto", sans-serif;
`;

const NameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderH2 = styled.h2`
  margin: 2rem 0;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
`;

const About = styled.div`
  font-size: 1.15rem;
  line-height: 2;
  letter-spacing: 0.25px;
`;

const BackBtnWrapper = styled.div`
  margin-bottom: 2rem;
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
      <BackBtnWrapper>
        <Link to="/search">
          <FaChevronLeft /> Back to Search
        </Link>
      </BackBtnWrapper>
      {loading ? (
        <LoadingWrapper>
          <figure>
            <img src={loadingGif} />
            <figcaption>Loading...</figcaption>
          </figure>
        </LoadingWrapper>
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
              <HeaderH2>Biography</HeaderH2>
              <About dangerouslySetInnerHTML={{ __html: markdown }} />
            </div>
          </SeiyuuWrapper>
        </Section>
      )}
    </div>
  );
}
