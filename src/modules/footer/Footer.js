import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StyledContainer>
      <StyledContactInfo>
        <span>USA – AUSTIN, 901 EAST E STREET, UTAH, CA 90744</span>
        <span>
          E-MAIL:<a href="mailto:#">MAIL@DEMOLINK.ORG </a>
        </span>
        <StyledPhoneNumber>(800) 123 1234</StyledPhoneNumber>
      </StyledContactInfo>
    </StyledContainer>
  );
}

const StyledContainer = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: #605a5f;
  letter-spacing: 0.35px;
  height: 10rem;
`;

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

const StyledPhoneNumber = styled.span`
  font-size: 20px;
`;

export default Footer;
