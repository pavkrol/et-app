import React, { useState } from 'react';
import { render } from "react-dom";
import LandingPage from "./layout/LandingPage";
import {ThemeProvider} from 'styled-components';
import GlobalStyle from "./layout/GlobalStyle";
import { theme } from "./layout/theme";
import { Router } from "@reach/router";
import RegisterPage from './containers/RegisterPage';
import DashboardView from './containers/DashboardView';

const App = () => {

  const [user, setUser] = useState({});
  const [finance, setData] = useState({});

  const updateUserData = (userData) => {
    setUser({
      ...user,
      userData
    });
  }

  const updateFinancialData = (financeData) => {
    setData({
      ...finance,
      financeData
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle/>
      <Router>
        <LandingPage path="/" />
        <RegisterPage path="register/*" dataFn={updateUserData} finFn={updateFinancialData}/>
        <DashboardView path="dashboard/*" user={user} finances={finance}/>
      </Router>
      </>
    </ThemeProvider>
  )
};

render(<App />, document.getElementById("root"));

