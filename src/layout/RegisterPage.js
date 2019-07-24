import React from 'react';
import styled from "styled-components";
import HeaderWrapper from "./HeaderWrapper";
import MainContent from './MainContent';

const Box = styled.div`
  width: 100%;
  height: 100vh;
  background: lightblue;
`;

const RegisterPage = () => {
  return (
    <>
      <HeaderWrapper />
      <MainContent />
    </>
  )
};

export default RegisterPage;