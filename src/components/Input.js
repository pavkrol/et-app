import styled, { css } from 'styled-components';

const Input = styled.input`
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  height: 30px;
  ${props => props.radio && css`
    opacity: 0;
    width: 0;             
    :checked + label:before {
      background-image: url(../assets/img/tick.svg);
      background-size: 10px;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #009688;
    }
    :hover + label:before {
      background-color: #009688;
    }
    :focus + label:before {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
    }
  `}
`;

export default Input;
