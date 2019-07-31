import React, {useState} from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm';
import FinancialForm from '../components/FinancialForm';
import {Router} from '@reach/router';


const Content = styled.section`
  height: calc(100vh - 75px);
  background: linear-gradient(121.86deg, #37ECBA 0.33%, #37ECBA 0.34%, #72AFD3 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 900px;
  background-color: white;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  border-radius: 7px;
  padding: 30px 15px 30px 45px;
`;

const Title = styled.h2`
  font-family: ${({theme}) => theme.font.main};
  font-weight: 600;
  font-size: 24px;
  color: ${({theme}) => theme.colors.darkGreen};
`;

const MainContent = () => {

  const [user, setUser] = useState({});

  const updateUserData = (data) => {
    setUser({
      ...user,
      data
    });
  }

  return (
    <Content>
      <FormWrapper>
        <Title>Rejestracja</Title>
        <Router>
          <RegisterForm path="/" dataFn={updateUserData}/>
          <FinancialForm path="financial" userData={user}/>
        </Router> 
      </FormWrapper>
    </Content>
  )
};

export default MainContent;