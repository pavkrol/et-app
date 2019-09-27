import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 35px;
`;

const Taxes = () => {
  return (
    <Wrapper>
      <Title>Podatki</Title>
    </Wrapper>
  )
};

export default Taxes;
