import React from 'react';
import styled from 'styled-components';
import Tile from '../components/Tile';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-gap: 15px;
  padding: 35px;
  background-color: white;
`;

const Title = styled.h2`
  font-size: 20px;
  font-family: ${({theme}) => theme.font.main};
  font-weight: 700;
  grid-column: span 3;
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

const DataBox = ({data, description, modalFn, ...props}) => {
  
  
  return(
    <Wrapper>
      <Title>{description}</Title>
      <Tile type="income" data={data.income}></Tile>
      <Tile type="expenses" data={data.expenses}></Tile>
      <Tile type="taxes" data={data.taxes}></Tile>
      {props.currentMonth ? (
        <>
        <AddTransaction onClick={() => modalFn(true)}>Wystaw fakturę</AddTransaction>
        <AddTransaction onClick={() => modalFn(true)}>Dodaj wydatek</AddTransaction>
        </>
      ) : ""}
    </Wrapper>
  )
};

export default DataBox;