import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getBreedImages } from "../api/dogApi";

function BreedDetails() {
  const { breedName } = useParams();

  const [gallery, setStateGallery] = useState([]);
  const [description, setStateDescription] = useState("");

  useEffect(() => {
    getBreedImages(breedName).then(response => {
      const { message } = response;
      const galleryList = message.map((src, index) => ({ id: index, src }));
      setStateGallery(galleryList);
    });
  }, [breedName]);

  return (
    <>
      <StyledTitle>{breedName}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledGallery>
        {gallery.map(({ id, src }) => (
          <StyledImgWrapper key={id}>
            <img src={src} alt="dog" />
          </StyledImgWrapper>
        ))}
      </StyledGallery>
    </>
  );
}

const StyledTitle = styled.h4`
  color: red;
`;
const StyledDescription = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const StyledGallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 6rem;
`;

const StyledImgWrapper = styled.div`
  margin: 1rem;
  width: 25rem;
`;

export default BreedDetails;
