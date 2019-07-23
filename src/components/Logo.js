import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const Abbr = styled.h2`
color: ${({theme}) => theme.colors.darkGreen};
font-family: ${({theme}) => theme.font.logo};
font-size: 36px;
`;

const AppName = styled.h1`
color: ${({theme}) => theme.colors.darkGreen};
font-family: ${({theme}) => theme.font.logo};
font-size: 20px;
`;

const Logo = () => {
  return (
    <Wrapper>
      <Abbr>ET.</Abbr>
      <AppName>easy taxing app</AppName>
    </Wrapper>
  )
};

export default Logo;