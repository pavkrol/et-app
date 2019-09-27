import React from 'react';
import styled from 'styled-components';
import DataBox from '../components/DataBox';
import TransactionsBox from '../components/TransactionsBox';
import { useStateValue } from '../data/StateProvider';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 20px;
  }
`;

const OverallData = ({ modalFn }) => {
 
  const [userProfile, dispatch] = useStateValue();
  
  const incomeSum = userProfile.financeData.reduce((prev, next) => {
    return parseFloat(prev) + parseFloat(next.income);
  }, 0);

  const expensesSum = userProfile.financeData.reduce((prev, next) => {
    return parseFloat(prev) + parseFloat(next.costs);
  }, 0);

  const taxesSum = parseFloat(userProfile.aggregatedData.taxesThisYear);

  const aggregatedData = {
    income: incomeSum,
    expenses: expensesSum,
    taxes: taxesSum
  };

  const currentMonth = {
    income: 9746.32,
    expenses: 6384.56,
    taxes: 6384.56
  };

  return(
    <Wrapper>
      <DataBox data={currentMonth} currentMonth modalFn={modalFn}>Bieżący miesiąc:</DataBox>
      <DataBox data={aggregatedData}>Od początku roku:</DataBox>
      <TransactionsBox transactions={userProfile.transactions}/>
    </Wrapper>
  )
};

export default OverallData;