import React from "react";
import styled from "styled-components";

const HexagonsWrapper = styled.div`
  position: relative;
  width: 270px;
  height: 50vh;
`;

const Item = styled.div`
  width: 100px;
  height: 55px;
  background: white;
  position: absolute;
  left: ${(props) => parseInt(props.posX)}px;
  top: ${(props) => parseInt(props.posY)}px;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: center;
  :before {
    content: "";
    position: absolute;
    top: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 25px solid white;
  }
  :after {
    content: "";
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 25px solid white;
    }
`;

const Hexagons = () => {
  return (
    <HexagonsWrapper>
      <Item posX="0" posY="0" icon="../../assets/img/analysis.svg"/>
      <Item posX="110" posY="0" icon="../../assets/img/card.svg"/>
      <Item posX="55" posY="87.5" icon="../../assets/img/chart.svg"/>
      <Item posX="-55" posY="87.5" icon="../../assets/img/creative.svg"/>
      <Item posX="0" posY="175" icon="../../assets/img/gears.svg"/>
      <Item posX="110" posY="175" icon="../../assets/img/money.svg"/>
    </HexagonsWrapper>
  )
};

export default Hexagons;