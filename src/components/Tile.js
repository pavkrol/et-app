import React from 'react';
import styled from 'styled-components';

const TileWrapper = styled.div`
  border: 1.5px solid ${(props) => props.type === 'income' ? '#17A981' : (
    props.type === 'expenses' ? ({theme}) => theme.colors.red : ({theme}) => theme.colors.yellow
  )};
  padding: 15px;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
`;

const Caption = styled.h3`
  font-family: ${({theme}) => theme.font.main};
  font-weight: 500;
  font-size: 18px;
  align-self: flex-start;
`;

const Value = styled.p`
  font-family: ${({theme}) => theme.font.main};
  font-weight: 500;
  font-size: 20px;
  align-self: flex-end;
`;

const Tile = ({type, data}) => {
  return (
    <TileWrapper type={type} data={data}>
      <Caption>{type==="income" ? "Przychody:" : (type === "expenses" ? "Wydatki:" : "Podatki (łącznie):")}</Caption>
      <Value>{data} PLN</Value>
    </TileWrapper>
  )
};

export default Tile;
