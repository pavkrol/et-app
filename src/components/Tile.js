import React from 'react';
import styled from 'styled-components';

const TileWrapper = styled.div`
  border: 1px solid ${(props) => props.type === 'income' ? '#17A981' : (
    props.type === 'expenses' ? ({theme}) => theme.colors.red : ({theme}) => theme.colors.yellow
  )};
`;

const Caption = styled.h3``;

const Value = styled.p``;

const Tile = ({type, data}) => {
  return (
    <TileWrapper type={type} data={data}>
      <Caption>Przychody:</Caption>
      <Value>{data}</Value>
    </TileWrapper>
  )
};

export default Tile;
