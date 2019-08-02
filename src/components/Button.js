import styled from "styled-components";

const Button = styled.a`
  color: ${(props) => props.colorstyle === 'full' ? ({theme}) => theme.colors.lightGreen : 'white'};
  width: 130px;
  height: 42px;
  font-family: ${({theme}) => theme.font.second};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.colorstyle === 'gradient' 
  ? 'linear-gradient(111.28deg, #1BCD9C 0%, #3E9DD5 100%)' 
  : (
    props.colorstyle === 'full' 
    ? 'white' 
    : (props.colorstyle === 'full_green' ? '#009688' : 'transparent')
  )};
  border-radius: 5px;
  border: 1px solid ${(props) => props.colorstyle === 'empty'|| props.colorstyle === 'full' ? 'white' : 'none'};

  :hover {
    background: ${(props) => props.colorstyle === 'gradient'|| props.colorstyle === 'empty' ? 'white' : 'none'} ;
    border: 1px solid ${(props) => props.colorstyle === 'gradient' || props.colorstyle === 'full_green' 
    ? ({theme}) => theme.colors.lightGreen 
    : (props.colorstyle === 'full' ? 'white' : 'none')
    };
    color: ${(props) => props.colorstyle === 'full' ? 'white' : ({theme}) => theme.colors.lightGreen};
  }
`;

export default Button;
