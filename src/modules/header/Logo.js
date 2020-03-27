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
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
  height: 80%;
`;

export default Logo;
