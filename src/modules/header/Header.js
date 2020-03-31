import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Search from "./Search";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
      <StyledSearchContainer>
        <Search />
      </StyledSearchContainer>
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

const StyledSearchContainer = styled.div`
  width: 15%;
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  background-color: #ffffff;
`;

export default Header;
