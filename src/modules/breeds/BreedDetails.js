import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getBreedImages } from "../api/dogApi";
import Gallery from "./Gallery";
import PageNumber from "./PageNumber";

function BreedDetails() {
  const { breedName } = useParams();

  const itemsPerPage = useRef(6);

  const [breedImages, setStateBreedImages] = useState([]);
  const [pageNumber, setStatePageNumber] = useState(1);
  const [description, setStateDescription] = useState("");

  useEffect(() => {
    getBreedImages(breedName).then(response => {
      const { message } = response;
      setStatePageNumber(1);
      setStateBreedImages(message.map((src, index) => ({ id: index, src })));
    });
  }, [breedName]);

  const handleNextPageClick = () => {
    const totalNumberOfPages = Math.ceil(
      breedImages.length / itemsPerPage.current
    );
    if (pageNumber + 1 <= totalNumberOfPages) {
      setStatePageNumber(pageNumber + 1);
    }
  };

  const handlePreviousPageClick = () => {
    const isGreaterThenZero = pageNumber - 1;
    if (isGreaterThenZero) {
      setStatePageNumber(pageNumber - 1);
    }
  };

  const handlePageNumberClick = number => {
    setStatePageNumber(number);
  };
  const fromIndex = pageNumber * itemsPerPage.current - itemsPerPage.current;
  const toIndex = pageNumber * itemsPerPage.current;
  const gallery = breedImages.filter(
    (elem, index) => index >= fromIndex && index < toIndex
  );

  return (
    <>
      <StyledTitle>{breedName}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      {gallery.length ? (
        <>
          <StyledPageNumberContainer>
            <PageNumber
              currentNumber={pageNumber}
              maxNumber={Math.ceil(breedImages.length / itemsPerPage.current)}
              onNextPageClick={handleNextPageClick}
              onPreviousPageClick={handlePreviousPageClick}
              onClickNumber={handlePageNumberClick}
            />
          </StyledPageNumberContainer>
          <StyledGallery>
            <Gallery gallery={gallery} />
          </StyledGallery>
          <StyledPageNumberContainer>
            <PageNumber
              currentNumber={pageNumber}
              maxNumber={Math.ceil(breedImages.length / itemsPerPage.current)}
              onNextPageClick={handleNextPageClick}
              onPreviousPageClick={handlePreviousPageClick}
              onClickNumber={handlePageNumberClick}
            />
          </StyledPageNumberContainer>
        </>
      ) : null}
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
  min-height: 80vh;
  @media screen and (max-width: 700px) {
    margin: 1rem;
  }
`;

const StyledPageNumberContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 400px) {
    justify-content: normal;
  }
  margin: 0 6rem;
  @media screen and (max-width: 700px) {
    margin: 1rem;
  }
`;

export default BreedDetails;
