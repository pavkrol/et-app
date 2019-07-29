import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm';

const Content = styled.section`
  height: calc(100vh - 75px);
  background: linear-gradient(121.86deg, #37ECBA 0.33%, #37ECBA 0.34%, #72AFD3 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 900px;
  min-height: 600px;
  background-color: white;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  border-radius: 7px;
  padding: 30px;
`;

const Title = styled.h2`
  font-family: ${({theme}) => theme.font.main};
  font-weight: 600;
  font-size: 24px;
  color: ${({theme}) => theme.colors.darkGreen};
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-family: ${({theme}) => theme.font.main};
  font-weight: 400;
  font-size: 14px;
  color: ${({theme}) => theme.colors.darkGreen};
`;

const MainContent = () => {
  return (
    <Content>
      <FormWrapper>
      <Title>Rejestracja</Title>
      <Description>Żeby rozpocząć pracę z programem konieczne jest podanie kilku danych dotyczących Twojej działalności.</Description>
      <RegisterForm/>
      </FormWrapper>
      
      
    </Content>
  )
};

export default MainContent;