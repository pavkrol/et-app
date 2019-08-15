import React from 'react';
import styled from "styled-components";
import HeaderWrapper from "./HeaderWrapper";
import MainContent from './MainContent';

const RegisterPage = ({dataFn, finFn}) => {
  return (
    <>
      <HeaderWrapper />
      <MainContent dataFn={dataFn} finFn={finFn}/>
    </>
  )
};

export default RegisterPage;