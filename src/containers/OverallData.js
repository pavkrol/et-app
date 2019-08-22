import React from 'react';
import styled from 'styled-components';
import DataBox from '../components/DataBox';
import TransactionsBox from '../components/TransactionsBox';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 20px;
  }
`;

const OverallData = ({userProfile}) => {
 
  const incomeSum = userProfile.financeData.reduce((prev, next) => {
    return parseFloat(prev) + parseFloat(next.income);
  }, 0);

  const expensesSum = userProfile.financeData.reduce((prev, next) => {
    return parseFloat(prev) + parseFloat(next.costs);
  }, 0);

  const taxesSum = parseFloat(userProfile.aggregatedData.taxesThisYear) + parseFloat(userProfile.aggregatedData.vatThisYear);

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
      <DataBox data={currentMonth} description="Bieżący miesiąc:" currentMonth/>
      <DataBox data={aggregatedData} description="Od początku roku:"/>
      <TransactionsBox transactions={userProfile.transactions}/>
    </Wrapper>
  )
};

export default OverallData;