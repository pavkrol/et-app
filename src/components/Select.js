import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.select`
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  height: 30px;
`;

const Select = ({options, changeFn}) => {
  return (
    <SelectWrapper onChange={(e) => changeFn({type: 'setType', value: e.target.value})}>
      {options.map(option => {
      return(
        <option value={option} key={option}>{option}</option>
      )
    })}
    </SelectWrapper>
  )
};

export default Select;
