import React from "react";
import styled from "styled-components";
import { DOG_IMAGES } from "./constants";

function Home() {
  return (
    <StyledSection>
      {DOG_IMAGES.map(({ id, src }) => (
        <StyledImg key={id} src={src} alt="dog" />
      ))}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledImg = styled.img.attrs(() => ({
  alt: "Dog"
}))`
  height: 26rem;
  border: 5px solid #2d2d2d;
  margin: 5px;
  width: 35rem;
`;

export default Home;
