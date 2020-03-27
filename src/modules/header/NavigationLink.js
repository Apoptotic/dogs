import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function NavigationLink({ to, text }) {
  return (
    <StyledNavLink>
      <NavLink to={to}>{text}</NavLink>
    </StyledNavLink>
  );
}

const StyledNavLink = styled.span`
  & a {
    text-decoration: none;
    padding: 10px;
  }
  & a.active {
    color: red;
  }
`;

export default NavigationLink;
