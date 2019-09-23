import React, { useState, useEffect } from 'react';
import { render } from "react-dom";
import LandingPage from "./layout/LandingPage";
import {ThemeProvider} from 'styled-components';
import GlobalStyle from "./layout/GlobalStyle";
import { theme } from "./layout/theme";
import { Router } from "@reach/router";
import RegisterPage from './containers/RegisterPage';
import DashboardView from './containers/DashboardView';
import {temporaryUser} from './data/temporaryUser';
import {useSpring, animated} from 'react-spring';
import {UserContext} from './data/UserContext';

const App = () => {
  
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  
  const [user, setUser] = useState(temporaryUser.userData);
  const [finance, setData] = useState(temporaryUser.financeData);
  const [transactions, setTransactions] = useState(temporaryUser.transactions);
  const [aggregatedData, setAggregatedData] = useState(temporaryUser.aggregatedData);

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

  const updateAggregatedData = (aggregatedData) => {
    setAggregatedData(
      aggregatedData
    );
  }

  const updateTransactions = (trx) => {
    setTransactions(transactions => [...transactions, trx]);
  }

  const userProfile = {userData: user, financeData: finance, transactions: transactions, aggregatedData: aggregatedData};

  return (
    <animated.div style={fade}>
      <UserContext.Provider value={userProfile}>
      <ThemeProvider theme={theme}>
        <>
        <GlobalStyle/>
        <Router>
          <LandingPage path="/" />
          <RegisterPage path="register/*" dataFn={updateUserData} finFn={updateFinancialData} aggrFn={updateAggregatedData}/>
          <DashboardView path="dashboard/*" userTransactions={transactions} transactionFn={updateTransactions}/>
        </Router>
        </>
      </ThemeProvider>
      </UserContext.Provider>
    </animated.div>
  )
};

render(<App />, document.getElementById("root"));

