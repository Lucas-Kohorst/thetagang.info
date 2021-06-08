import React, { useState } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Title, PrimaryText, Button } from "../../designSystem";
import { Container } from "react-bootstrap";
import sizes from "../../designSystem/sizes";

const ColorColumn = styled(Col)<{
  activeColor: string;
  passiveColor: string;
}>`
  height: 640px;
  width: 20%;
  background-color: ${(p) => p.passiveColor};
`;

const MainContainer = styled(Container)`
  background-color: #1c1a19;
  height: 640px;

  @media (max-width: ${sizes.md}px) {
    height: 540px;
  }
`;

const SubtitleContainer = styled.div`
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
`;

const SubTitle = styled(PrimaryText)`
  color: #ffffff;
`;

const BackgroundContainer = styled(Row)`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;

  @media (max-width: ${sizes.md}px) {
    display: none;
  }
`;

const HeroContainer = styled(Container)`
  position: relative;
`;

const TextContainer = styled(Row)`
  pointer-events: none;
  height: 100%;
  align-items: center;
  text-align: center;
`;

const TitleContainer = styled.div`
  @media (max-width: ${sizes.md}px) {
    display: none;
  }
`;

const TitleContainerMobile = styled.div`
  display: none;
  @media (max-width: ${sizes.md}px) {
    display: flex;
  }
`;

const TitleSmall = styled(Title)`
  font-size: 48px;
`;

const TitleAlt = styled(Title)`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
`;

const TitleAltSmall = styled(TitleSmall)`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
`;

const CTAButton = styled(Button)`
  &:hover {
    background-color: #ffffff;
    color: #1c1a19;
  }
`;

const Hero = () => {
  const [, setCol] = useState(0);

  enum PassiveColors {
    "#1C1A19",
  }

  enum ActiveColors {
    "#FF385C",
    "#FF9000",
    "#79FFCB",
    "#729DED",
  }

  function changeBackground(e: any, column: number) {
    e.target.style.background = ActiveColors[column];
    setCol(column);
  }

  function resetBackground(e: any, column: number) {
    e.target.style.background = PassiveColors[column];
  }

  return (
    <MainContainer fluid>
      <HeroContainer fluid style={{ position: "relative" }}>
        <BackgroundContainer>
          <ColorColumn
            passiveColor={PassiveColors[0]}
            onMouseOver={(e: any) => changeBackground(e, 0)}
            onMouseLeave={(e: any) => resetBackground(e, 0)}
          />
          <ColorColumn
            passiveColor={PassiveColors[0]}
            onMouseOver={(e: any) => changeBackground(e, 1)}
            onMouseLeave={(e: any) => resetBackground(e, 0)}
          />
          <ColorColumn
            passiveColor={PassiveColors[0]}
            onMouseOver={(e: any) => changeBackground(e, 2)}
            onMouseLeave={(e: any) => resetBackground(e, 0)}
          />
          <ColorColumn
            passiveColor={PassiveColors[0]}
            onMouseOver={(e: any) => changeBackground(e, 3)}
            onMouseLeave={(e: any) => resetBackground(e, 0)}
          />
        </BackgroundContainer>
      </HeroContainer>

      <TextContainer fluid>
        <Col>
          <TitleContainer>
            <Title>
              Ribbon Finance
            </Title>
          </TitleContainer>

          <TitleContainerMobile>
            <TitleSmall>
              Ribbon Finance
            </TitleSmall>
          </TitleContainerMobile>

          <SubtitleContainer>
            <SubTitle>
              Earn yield on your cryptoassets with DeFi's first structured
              products protocol.
            </SubTitle>
          </SubtitleContainer>
          <ButtonContainer>
            <a
              href="https://app.ribbon.finance"
              target="_blank"
              rel="noreferrer noopener"
            >
              <CTAButton>Enter Ribbon</CTAButton>
            </a>
          </ButtonContainer>
        </Col>
      </TextContainer>
    </MainContainer>
  );
};

export default Hero;
