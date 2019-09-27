import styled from 'styled-components';

const Title = styled.h2`
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.main};
  font-weight: 700;
  grid-column: span 3;
`;

export default Title;