import React from "react";
import styled from "styled-components";
import { TIPS_FOR_NEW_OWNER } from "./constants";
import TipForNewOwner from "./TipForNewOwner";

function WrapperTipsForNewOwner() {
  return (
    <StyledContainer>
      <StyledTitle>Tips for new dog owners</StyledTitle>
      <StyledWrapper>
        {TIPS_FOR_NEW_OWNER.map(({ id, tipNumber, title, description }) => (
          <StyledTipForNewOwnerWrapper key={id}>
            <TipForNewOwner
              title={title}
              tipNumber={tipNumber}
              description={description}
            />
          </StyledTipForNewOwnerWrapper>
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  display: flex;
  background-color: #060405;
  color: #a9a4a8;
  flex-direction: column;
`;

const StyledTitle = styled.h3`
  text-align: center;
  font-size: 48px;
  color: #dededec9;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledTipForNewOwnerWrapper = styled.div`
  max-width: 35rem;
  margin: 2rem 1rem;
`;

export default WrapperTipsForNewOwner;
