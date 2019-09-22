import React from 'react';
import HeaderWrapper from "./HeaderWrapper";
import MainContent from './MainContent';

const RegisterPage = ({dataFn, finFn, aggrFn}) => {
  return (
    <div>
      <HeaderWrapper />
      <MainContent dataFn={dataFn} finFn={finFn} aggrFn={aggrFn}/>
    </div>
  )
};

export default RegisterPage;