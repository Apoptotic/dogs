import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { DOG_IMAGES } from "./constants";
import WrapperCareAndHelp from "./WrapperCareAndHelp";
import WrapperTipsForNewOwner from "./WrapperTipsForNewOwner";

function Home() {
  return (
    <>
      <StyledH1>
        <FontAwesomeIcon icon={faHeart} color="red" />
        Dogs
      </StyledH1>
      <StyledDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </StyledDescription>
      <StyledSection>
        {DOG_IMAGES.map(({ id, src }) => (
          <StyledImg key={id} src={src} alt="dog" />
        ))}
      </StyledSection>
      <WrapperCareAndHelp />
      <WrapperTipsForNewOwner />
    </>
  );
}

const StyledH1 = styled.h1`
  text-align: center;
`;

const StyledDescription = styled.p`
  margin: 0 6rem;
  @media screen and (max-width: 800px) {
    margin: 0 2rem;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 6rem;
`;

const StyledImg = styled.img`
  border: 5px solid #2d2d2d;
  margin: 1rem;
  width: 25rem;
`;

export default Home;
