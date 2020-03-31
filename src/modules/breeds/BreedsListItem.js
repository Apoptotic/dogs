import React from "react";
import styled from "styled-components";

function BreedsListItem({ title, description, imgSrc }) {
  return (
    <>
      <StyledWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledWrapper>
      <StyledImgWrapper>
        <img src={imgSrc} alt="dog" />
      </StyledImgWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 1rem;
`;

const StyledTitle = styled.h4`
  display: flex;
  color: red;
`;
const StyledDescription = styled.p`
  display: flex;
  font-size: 0.9rem;
  margin: 0;
`;

const StyledImgWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default BreedsListItem;
