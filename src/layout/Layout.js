import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from "./GlobalStyle";
import {theme} from "./theme";
import HeaderWrapper from "./HeaderWrapper";
import Hero from "./Hero";


const Layout = () => {
  return(
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle/>
      <HeaderWrapper/>
      <Hero/>
      </>
    </ThemeProvider>
  )
};

export default Layout;