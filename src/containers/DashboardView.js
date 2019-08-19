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
  border-bottom: 1px solid #E3E3E3;
`;

const DashboardHeader = styled.header`
  padding-right: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Aside = styled.nav``;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const NavItem = styled.li`
  height: 60px;
  color: #ABA8A8;
  font-family: ${({theme}) => theme.font.logo};
  font-size: 16px;
  font-weight: 400;
  padding-left: 40px;
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
      <Aside>
        <NavigationList>
          <NavItem>Pulpit</NavItem>
          <NavItem>Podatki</NavItem>
          <NavItem>Faktury</NavItem>
          <NavItem>Wydatki</NavItem>
          <NavItem>Zadania</NavItem>
        </NavigationList>
      </Aside>
    </DashboardWrapper>
  )
};

export default DashboardView;