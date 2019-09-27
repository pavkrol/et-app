import React from 'react';
import styled from 'styled-components';
import Tile from '../components/Tile';
import Title from './Title';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-gap: 15px;
  padding: 35px;
  background-color: white;
`;

const AddTransaction = styled.button`
  font-family: ${({theme}) => theme.font.main};
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 45px;
  position: relative;
  :hover {
    font-weight: 700;
    color: ${({theme}) => theme.colors.darkGreen};
    :before {
      background-image: url(../../assets/img/plus_green.svg);
    }
  }
  :before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    background-image: url(../../assets/img/plus.svg);
    background-size: contain;
    position: absolute;
    left: 0;
  }
`;

const DataBox = ({data, modalFn, children, currentMonth}) => {
  
  
  return(
    <Wrapper>
      <Title>{children}</Title>
      <Tile type="income" data={data.income}></Tile>
      <Tile type="expenses" data={data.expenses}></Tile>
      <Tile type="taxes" data={data.taxes}></Tile>
      {currentMonth ? (
        <>
        <AddTransaction onClick={() => modalFn(true)}>Dodaj transakcję</AddTransaction>
        </>
      ) : ""}
    </Wrapper>
  )
};

export default DataBox;