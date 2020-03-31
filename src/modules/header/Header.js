import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavBar from "./NavBar";
import AutocompleteSearch from "./AutocompleteSearch";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
      <AutocompleteSearch />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background: #2d2d2d;
  color: #ffffff;
  position: relative;
  @media screen and (max-width: 1000px) {
    justify-content: start;
  }
`;

export default Header;
