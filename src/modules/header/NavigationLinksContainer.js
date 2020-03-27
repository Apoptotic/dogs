import React from "react";
import styled from "styled-components";
import { NAVIGATION_LINKS } from "./constants";
import NavigationLink from "./NavigationLink";

function NavigationLinksContainer() {
  return (
    <StyledUl>
      {NAVIGATION_LINKS.map(({ id, to, text }) => (
        <StyledLi key={id}>
          <NavigationLink to={to} text={text} />
        </StyledLi>
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 0;
`;

const StyledLi = styled.li`
  display: flex;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 10px;
  &:hover {
    background-color: #474747;
  }
`;

export default NavigationLinksContainer;
