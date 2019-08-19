import React from "react";
import styled from "styled-components";
import {Link} from "@reach/router";

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const Abbr = styled.h2`
  color: ${({theme}) => theme.colors.darkGreen};
  font-family: ${({theme}) => theme.font.logo};
  font-size: 36px;
  font-weight: 800;
`;

const AppName = styled.h1`
  color: ${({theme}) => theme.colors.darkGreen};
  font-family: ${({theme}) => theme.font.logo};
  font-size: 20px;
  font-weight: 800;
`;

const Logo = () => {
  return (
    <Wrapper as={Link} to="/">
      <Abbr>ET.</Abbr>
      <AppName>easy taxing app</AppName>
    </Wrapper>
  )
};

export default Logo;