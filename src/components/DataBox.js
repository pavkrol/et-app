import React from 'react';
import styled from 'styled-components';
import Tile from '../components/Tile';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
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

const DataBox = ({data, description}) => {
  
  
  return(
    <Wrapper>
      <Title>{description}</Title>
      <Tile type="income" data={data.income}></Tile>
      <Tile type="expenses" data={data.expenses}></Tile>
      <Tile type="taxes" data={data.taxes}></Tile>
    </Wrapper>
  )
};

export default DataBox;