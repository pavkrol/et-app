import React from 'react';
import HeaderWrapper from "./HeaderWrapper";
import MainContent from './MainContent';

const RegisterPage = ({dataFn, finFn, aggrFn}) => {
  return (
    <>
      <HeaderWrapper />
      <MainContent dataFn={dataFn} finFn={finFn} aggrFn={aggrFn}/>
    </>
  )
};

export default RegisterPage;