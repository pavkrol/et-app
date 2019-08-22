import React from 'react';
import styled, {css} from 'styled-components';

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #F3F3F3;
  grid-column: span 5;
  padding-top: 15px;
  flex-wrap: wrap;
`;
  
const Item = styled.p`
  font-size: 14px;
  font-family: ${({theme}) => theme.font.main};
  font-weight: 400;
  color: black;
  flex-basis: 50%;
  margin-bottom: 10px;
`;

const Details = ({isOpen, transaction}) => {
  return (
    <DetailsWrapper isOpen={isOpen}>
      <Item>ID: {transaction.id}</Item>
      <Item>Numer dokumentu: {transaction.document_nr}</Item>
      <Item>Adres klienta: {transaction.client_address}</Item>
      <Item>Stawka VAT: {transaction.VAT_level * 100} %</Item>
      <Item>Wartość brutto: {(parseFloat(transaction.value) * (1 + transaction.VAT_level)).toFixed(2)} PLN</Item>
    </DetailsWrapper>
  )
};

export default Details;