import React, {useState} from 'react';
import styled from 'styled-components';
import Details from './Details';

const Wrapper = styled.div`
  padding: 20px 40px;
  background-color: #F3F3F3;
  min-height: 55px;
  display: grid;
  grid-template-columns: 18% 1fr 15% 17% 15%;
  grid-template-rows: ${(props) => props.showDetails ? 'repeat(2, auto)' : 'auto'};
  margin-bottom: 10px;
`;

const Date = styled.div`
  font-family: ${({theme}) => theme.font.main};
  font-size: 14px;
  font-weight: 500;
`;

const Client = styled.div`
  font-family: ${({theme}) => theme.font.main};
  font-size: 14px;
  font-weight: 500;
`;

const Amount = styled.div`
  font-family: ${({theme}) => theme.font.main};
  font-size: 14px;
  font-weight: 500;
`;

const Type = styled.div`
  width: 75px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: ${({theme}) => theme.font.logo};
  font-weight: 500;
  color: ${ (props) => props.type === 'przychód' ? ({theme}) => theme.colors.green : 
  ( props.type === 'podatek' ? ({theme}) => theme.colors.yellow : ({theme}) => theme.colors.red )};
  background-color: ${ (props) => props.type === 'przychód' ? 'rgba(0, 150, 136, 0.2)' : 
  ( props.type === 'podatek' ? 'rgba(247, 154, 0, 0.2)' : 'rgba(227, 0, 53, 0.2)')};
  border-radius: 4px;
`;

const DetailsDropdown = styled.button`
  font-family: ${({theme}) => theme.font.main};
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.grey};
`;

const Transaction = ({transaction}) => {
  
  const [detailsOpen, setDetails] = useState(false);
  
  return(
    <Wrapper showDetails={detailsOpen}>
      <Date>{transaction.date}</Date>
      <Client>{transaction.client}</Client>
      <Amount>{transaction.value} PLN</Amount>
      <Type type={transaction.type}>{transaction.type}</Type>
      {transaction.type !== 'podatek' ? 
      <DetailsDropdown onClick={() => setDetails(!detailsOpen)}>Szczegóły {!detailsOpen ? <>&#8595;</> : <>&#8593;</>}</DetailsDropdown>
      : ""}
      {detailsOpen && transaction.type !== 'podatek' ? (
        <Details isOpen={detailsOpen} transaction={transaction}/>
      ) : ""}
    </Wrapper>
  )
};

export default Transaction;