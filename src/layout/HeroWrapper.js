import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "@reach/router";

const Hero = styled.section`
  height: calc(100vh - 75px);
  background: linear-gradient(121.86deg, #37ECBA 0.33%, #37ECBA 0.34%, #72AFD3 100%);
  z-index: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: calc(100vh - 75px);
  padding: 0 15%;
`;

const Title = styled.h2`
  font-family: ${({theme}) => theme.font.main};
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: white;
  margin-bottom: 10px;
  padding-top: 20vh;
`;

const Subtitle = styled.h3`
  font-family: ${({theme}) => theme.font.main};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: white;
  margin-bottom: 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;

  * {
    margin-right: 20px;
  }
`;



const HeroWrapper = () => {
  return(
    <>
      <Hero>
        <WrapperLeft>
        <Title>Podatki, faktury, płatności - wszystko w jednym miejscu</Title>
        <Subtitle>Wszystko czego potrzebujesz, żeby samodzielnie prowadzić księgowość w jednoosobowej działalności gospodarczej</Subtitle>
        <ButtonsWrapper>
          <Button as={Link} to="register" type="full">Zarejestruj</Button>
          <Button type="empty">Zaloguj</Button>
        </ButtonsWrapper>
        </WrapperLeft> 
      </Hero>
    </>
  );
};



export default HeroWrapper;