import React from "react";
import styled from "styled-components";

function PageNumber({
  currentNumber,
  onPreviousPageClick,
  onNextPageClick,
  onClickNumber,
  maxNumber
}) {
  const nextNumbers = () => {
    const arr = [];
    if (currentNumber + 1 < maxNumber) {
      arr.push({ id: 1, number: currentNumber + 1 });
    }
    if (currentNumber + 2 < maxNumber) {
      arr.push({ id: 2, number: currentNumber + 2 });
    }
    return arr;
  };
  return (
    <StyledContainer>
      <StyledChangePageNumber onClick={onPreviousPageClick} type="button">
        {"<"}
      </StyledChangePageNumber>
      <StyledCurrentNumber>{currentNumber}</StyledCurrentNumber>
      {nextNumbers().map(({ id, number }) => {
        return (
          <StyledChangePageNumber
            key={id}
            onClick={() => onClickNumber(number)}
            type="button"
          >
            {number}
          </StyledChangePageNumber>
        );
      })}
      {currentNumber + 3 >= maxNumber ? null : <span>...</span>}
      {maxNumber !== currentNumber && (
        <StyledChangePageNumber onClick={() => onClickNumber(maxNumber)}>
          {maxNumber}
        </StyledChangePageNumber>
      )}
      <StyledNextPage onClick={onNextPageClick} type="button">
        {">"}
      </StyledNextPage>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  min-width: 20rem;
  position: relative;
`;

const StyledChangePageNumber = styled.button`
  background: transparent;
  border: 0;
  color: #ffffff;
  :hover {
    background-color: grey;
  }
  outline: none;
  width: 3rem;
`;

const StyledNextPage = styled(StyledChangePageNumber)`
  position: absolute;
  right: 0;
`;

const StyledCurrentNumber = styled.button`
  border: 0;
  outline: none;
  background: transparent;
  width: 3rem;
  color: green;
`;

export default PageNumber;
