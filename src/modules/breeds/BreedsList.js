import React from "react";
import styled from "styled-components";
import { BREEDS_LIST } from "./constants";
import BreedsListItem from "./BreedsListItem";

function BreedsList() {
  return (
    <>
      <StyledTitle>Breeds List</StyledTitle>
      <StyledContainer>
        {BREEDS_LIST.map(({ id, title, description, imgSrc }) => (
          <StyledBreedsListItem key={id}>
            <BreedsListItem
              title={title}
              description={description}
              imgSrc={imgSrc}
            />
          </StyledBreedsListItem>
        ))}
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledTitle = styled.h1`
  text-align: center;
`;

const StyledBreedsListItem = styled.div`
  width: 30rem;
  display: flex;
  margin: 1rem;
`;

export default BreedsList;
