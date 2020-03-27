import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavigationLinksContainer from "./NavigationLinksContainer";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavigationLinksContainer />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background: #2d2d2d;
  color: #ffffff;
  position: relative;
`;

export default Header;
