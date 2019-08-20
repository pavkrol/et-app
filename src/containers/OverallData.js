import React from 'react';
import styled from 'styled-components';
import DataBox from '../components/DataBox';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 20px;
  }
`;

const OverallData = ({userProfile}) => {

  const currentMonth = {
    income: 9746.32,
    expenses: 6384.56,
    taxes: 6384.56
  };

  return(
    <Wrapper>
      <DataBox data={currentMonth} description="Bieżący miesiąc:"/>
      <div>second</div>
      <div>third</div>
    </Wrapper>
  )
};

export default OverallData;