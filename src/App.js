import React, { useState } from 'react';
import { render } from "react-dom";
import LandingPage from "./layout/LandingPage";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./layout/GlobalStyle";
import { theme } from "./layout/theme";
import { Router } from "@reach/router";
import RegisterPage from './containers/RegisterPage';
import DashboardView from './containers/DashboardView';
import { temporaryUser } from './data/temporaryUser';
import { useSpring, animated } from 'react-spring';
import { StateProvider } from './data/StateProvider';

const App = () => {
  
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  const initialState = {userData: temporaryUser.userData, financeData: temporaryUser.financeData, transactions: temporaryUser.transactions, aggregatedData: temporaryUser.aggregatedData};

  const reducer = (state, action) => {
    switch (action.type) {
      case 'updateUserData':
        return {
          ...state,
          userData: action.value
        };
      case 'updateTransactions':
        return {
          ...state,
          transactions: [...state.transactions, action.value]
        };
      case 'updateFinance':
        return {
          ...state,
          financeData: action.value
        };
      case 'updateAggregated':
        return {
          ...state,
          aggregatedData: action.value
        };
      default: 
        return state;
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <animated.div style={fade}>
        <ThemeProvider theme={theme}>
          <>
          <GlobalStyle/>
          <Router>
            <LandingPage path="/" />
            <RegisterPage path="register/*"/>
            <DashboardView path="dashboard/*"/>
          </Router>
          </>
        </ThemeProvider>
      </animated.div>
    </StateProvider>
  )
};

render(<App />, document.getElementById("root"));

