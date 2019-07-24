import React from "react";
import styled from "styled-components";
import {Link} from "@reach/router";

const Button = styled.a`
  color: ${(props) => props.type === 'gradient'|| props.type === 'empty' ? 'white' : ({theme}) => theme.colors.lightGreen};
  width: 130px;
  height: 42px;
  font-family: ${({theme}) => theme.font.second};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.type === 'gradient' ? 'linear-gradient(111.28deg, #1BCD9C 0%, #3E9DD5 100%)' : (
    props.type === 'full' ? 'white' : 'transparent'
  )};
  border-radius: 5px;
  border: 1px solid ${(props) => props.type === 'empty'|| props.type === 'full' ? 'white' : 'none'};

  :hover {
    background: ${(props) => props.type === 'gradient'|| props.type === 'empty' ? 'white' : 'none'} ;
    border: 1px solid ${(props) => props.type === 'gradient' ? ({theme}) => theme.colors.lightGreen : (
    props.type === 'full' ? 'white' : 'none'
  )};;
    color: ${(props) => props.type === 'gradient'|| props.type === 'empty' ? ({theme}) => theme.colors.lightGreen : 'white'} ;
  }
`;

export default Button;
