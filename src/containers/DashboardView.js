import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import ProfilePhoto from '../components/ProfilePhoto';

const DashboardWrapper = styled.main`
  display: grid;
  grid-template-columns: 325px 1fr;
  grid-template-rows: 75px 1fr;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #E3E3E3;
`;

const DashboardHeader = styled.header`
  padding-right: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DashboardView = ({userProfile}) => {
  return (
    <DashboardWrapper>
      <LogoWrapper>
        <Logo/>
      </LogoWrapper>
      <DashboardHeader>
        <ProfilePhoto companyName={userProfile.userData.company}/>
      </DashboardHeader>
    </DashboardWrapper>
  )
};

export default DashboardView;