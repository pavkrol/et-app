import React from 'react';
import styled from 'styled-components';
import Transaction from '../components/Transaction';

const Title = styled.h2`
  font-size: 20px;
  font-family: ${({theme}) => theme.font.main};
  font-weight: 700;
  color: black;
  margin-bottom: 20px;
`;

const TransactionsWrapper = styled.div`
  padding: 35px;
  background-color: white;
`;

const TransactionsBox = ({transactions}) => {
    
  return(
    <TransactionsWrapper>
      <Title>Ostatnie transakcje:</Title>
      {transactions.length ? transactions.map(element => 
          <Transaction transaction={element} key={element.id}/>
      ) : (
        "Brak transakcji do wyświetlenia"
      )}
    </TransactionsWrapper>
  )
};

export default TransactionsBox;