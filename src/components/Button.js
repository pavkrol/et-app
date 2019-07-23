import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  width: 130px;
  height: 42px;
  font-family: ${({theme}) => theme.font.second};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(111.28deg, #1BCD9C 0%, #3E9DD5 100%);
  border-radius: 5px;

  :hover {
    background: white;
    border: 1px solid ${({theme}) => theme.colors.lightGreen};
    color: ${({theme}) => theme.colors.lightGreen};
  }
`;

export default Button;
