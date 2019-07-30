import React from 'react';
import { render } from "react-dom";
import LandingPage from "./layout/LandingPage";
import {ThemeProvider} from 'styled-components';
import GlobalStyle from "./layout/GlobalStyle";
import { theme } from "./layout/theme";
import { Router } from "@reach/router";
import RegisterPage from './containers/RegisterPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle/>
      <Router>
        <LandingPage path="/" />
        <RegisterPage path="register/*" />
      </Router>
      </>
    </ThemeProvider>
  )
};

render(<App />, document.getElementById("root"));

