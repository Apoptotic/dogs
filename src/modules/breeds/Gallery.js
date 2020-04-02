import React from "react";
import styled from "styled-components";

function Gallery({ gallery }) {
  return (
    <>
      {gallery.map(({ id, src }) => (
        <StyledImgWrapper key={id}>
          <StyledImg src={src} alt="dog" />
        </StyledImgWrapper>
      ))}
    </>
  );
}

const StyledImgWrapper = styled.div`
  margin: 1rem;
  width: 25rem;
`;

const StyledImg = styled.img`
  width: 100%;
`;

export default Gallery;
