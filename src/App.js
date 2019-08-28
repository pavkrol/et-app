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

const App = () => {

  const [user, setUser] = useState({});
  const [finance, setData] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storageUser = getUsersFromStorage();
    updateUserData(storageUser.userData);
    updateFinancialData(storageUser.financeData);
    updateTransactions(storageUser.transactions[0]);
    updateTransactions(storageUser.transactions[1]);
    updateTransactions(storageUser.transactions[2]);
  }, []);

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

  const updateTransactions = (trx) => {
    setTransactions(transactions => [...transactions, trx]);
  }

  const storageAvailable = (type) => {
    let storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            (storage && storage.length !== 0);
    }
  }

  const addUserToStorage = (user) => {
    if (storageAvailable('localStorage')) {
      localStorage.setItem('users', JSON.stringify(user));
    }
  }

  const userProfile = {...user, ...finance, transactions: transactions, aggregatedData: temporaryUser.aggregatedData};
  const getUsersFromStorage = () => {
    return JSON.parse(localStorage.getItem('users'));
  }

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle/>
      <Router>
        <LandingPage path="/" />
        <RegisterPage path="register/*" dataFn={updateUserData} finFn={updateFinancialData}/>
        <DashboardView path="dashboard/*" userProfile={userProfile} userTransactions={transactions} transactionFn={updateTransactions}/>
      </Router>
      </>
    </ThemeProvider>
  )
};

render(<App />, document.getElementById("root"));

