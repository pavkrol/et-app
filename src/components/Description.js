import styled from 'styled-components';

const Description = styled.p`
  font-family: ${({ theme }) => theme.font.main};
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGreen};
  margin-bottom: 20px;
`;

export default Description;
