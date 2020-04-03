import React from "react";
import styled from "styled-components";

function About() {
  return (
    <StyledContainer>
      <StyledItem>
        <StyledText>
          Nam quis congue lacus. Vestibulum ullamcorper efficitur nibh, ac
          vulputate justo gravida non. Vestibulum efficitur sed urna at
          hendrerit. Maecenas vel euismod ipsum. Aliquam ultrices nisl at
          vestibulum aliquam. Aenean finibus eget ante vel finibus. Nulla
          facilisi. Morbi rhoncus, sem a mattis pharetra, augue tellus lobortis
          ipsum, quis ultrices diam erat a sem. Nulla aliquam mattis dui,
          vestibulum imperdiet diam gravida vitae. Nam suscipit, massa sed
          malesuada euismod, libero turpis efficitur sapien, scelerisque viverra
          augue risus et nisi.
        </StyledText>
        <StyledImgWrapper>
          <img src="./img/shelter.jpg" alt="Dog Shelter" />
        </StyledImgWrapper>
      </StyledItem>
      <StyledImgWrapper>
        <img src="./img/happyDog.jpg" alt="Happy Dog" />
      </StyledImgWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 5rem auto;
  width: 90vw;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: normal;
  }
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledText = styled.p`
  font-size: 20px;
  display: flex;
`;

const StyledImgWrapper = styled.div`
  margin: 1rem;
  //padding: 1rem;
`;

export default About;
