import React from "react";
import styled from "styled-components";

function TipForNewOwner({ tipNumber, title, description }) {
  return (
    <StyledContainer>
      <StyledTipNumber>{tipNumber}</StyledTipNumber>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  font-family: "Abril Fatface", serif;
`;

const StyledTipNumber = styled.span`
  font-size: 33px;
`;

const StyledTitle = styled.h4`
  font-size: 24px;
`;

const StyledDescription = styled.p`
  font-size: 16px;
`;

export default TipForNewOwner;
