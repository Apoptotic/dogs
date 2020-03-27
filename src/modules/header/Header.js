import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background: #2d2d2d;
  color: #ffffff;
  position: relative;
  @media screen and (max-width: 750px) {
    justify-content: start;
  }
`;

export default Header;
