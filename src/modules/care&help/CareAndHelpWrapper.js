import React from "react";
import styled from "styled-components";
import CareAndHelp from "./CareAndHelp";
import { CARE_AND_HELP } from "./constants";

function CareAndHelpWrapper() {
  return (
    <StyledContainer>
      {CARE_AND_HELP.map(({ id, title, icon, description, readMoreLink }) => (
        <StyledWrapper>
          <CareAndHelp
            key={id}
            title={title}
            icon={icon}
            description={description}
            readMoreLink={readMoreLink}
          />
        </StyledWrapper>
      ))}
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  display: flex;
  background-color: #2d2d2d;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  max-width: 35rem;
  margin: 2rem 1rem;
`;

export default CareAndHelpWrapper;
