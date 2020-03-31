import React from "react";
import styled from "styled-components";
import LogoSvg from "./LogoSvg.svg";

function Logo() {
  return <StyledImg alt="Logo" />;
}

const StyledImg = styled.img.attrs({
  src: LogoSvg,
  alt: "Logo"
})`
  display: none;
  @media screen and (min-width: 1001px) {
    display: flex;
    position: absolute;
    top: 50%;
    left: 3%;
    transform: translateY(-50%);
    height: 80%;
  }
`;

export default Logo;
