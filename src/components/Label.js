import styled, { css } from 'styled-components';

const Label = styled.label`
  font-family: ${({ theme }) => theme.font.main};
  font-size: ${(props) => props.radio ? "11px" : "13px"};
  margin: ${(props) => props.inline ? "0 15px 0 0" : "0 0 10px 0"};
  ${props => props.radio && css`
    line-height: 15px;
    padding: 0 15px 0 0;
    position: relative;
    cursor: pointer;
    :before {
      content: '';
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 2px;
      background-color: white;
      border: 1px solid #009688;
      vertical-align: text-top;
      margin-right: 7px;
    }
  `}
`;

export default Label;
