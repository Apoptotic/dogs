import React from "react";
import styled from "styled-components";
import { NAVIGATION_LINKS } from "./constants";
import NavigationLink from "./NavigationLink";

function NavBar() {
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
  padding: 20px;
  margin: 0;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
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

export default NavBar;
