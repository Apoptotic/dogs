import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CareAndHelp({ title, icon, description, readMoreLink }) {
  return (
    <StyledContainer>
      <FontAwesomeIcon icon={icon.src} size="3x" color={icon.color} />
      <StyledWrapper>
        <StyledTitle>{title}</StyledTitle>
        <p>{description}</p>
        <StyledReadMore to={readMoreLink}>Read more {">"}</StyledReadMore>
      </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  font-family: "Times New Roman", "serif";
  background-color: #2d2d2d;
  color: #938e93;
  font-size: 14px;
  :hover {
    color: #cdcdcd;
    transition: 0.5s ease;
  }
`;

const StyledWrapper = styled.div`
  flex-direction: column;
  margin-left: 2rem;
  display: flex;
`;

const StyledTitle = styled.h4`
  text-transform: uppercase;
  margin: 0;
  font-family: "abril fatface", "serif";
  font-size: 24px;
`;

const StyledReadMore = styled(Link)`
  display: flex;
  text-transform: uppercase;
  text-decoration: none;
  :hover {
    color: #ffffff;
    transition: 0.5s ease;
  }
`;

export default CareAndHelp;
