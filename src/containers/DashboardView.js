import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Logo from '../components/Logo';
import ProfilePhoto from '../components/ProfilePhoto';
import Taxes from '../containers/Taxes';
import OverallData from '../containers/OverallData';
import AddTransactionModal from '../components/AddTransactionModal';
import {useSpring, animated} from 'react-spring';
import { useStateValue } from '../data/StateProvider';

const DashboardWrapper = styled(animated.main)`
  display: grid;
  grid-template-columns: 325px 1fr;
  grid-template-rows: 75px calc(100vh - 75px);
`;

const DashboardContent = styled.section`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.lighterGrey};
  padding: 40px;
  overflow: auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${({theme}) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({theme}) => theme.colors.lightGrey};
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
`;

const NavButton = styled.button`
  color: #ABA8A8;
  font-family: ${({theme}) => theme.font.logo};
  font-size: 16px;
  font-weight: 400;
  padding-left: 40px;
  width: 100%;
  display: flex;
  height: 100%;
  ${props => props.active && css`
    color: ${({theme}) => theme.colors.darkGreen};
    border-left: 7px solid ${({theme}) => theme.colors.darkGreen};
    padding-left: 33px;
    font-weight: 600;
  `}
  &:hover {
    color: ${({theme}) => theme.colors.darkGreen};
    background-color: ${({theme}) => theme.colors.lightGrey};
    border-left: 7px solid ${({theme}) => theme.colors.darkGreen};
    padding-left: 33px;
  }
`;

const DashboardView = () => {
  const [activeView, setActiveView] = useState("overall");
  const [transactionModal, setTransactionModal] = useState(false);
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  const [userProfile, dispatch] = useStateValue();
  console.log(userProfile);

  return (
          <DashboardWrapper style={fade} >
          <LogoWrapper>
            <Logo/>
          </LogoWrapper>
          <DashboardHeader>
              <ProfilePhoto companyName={userProfile.userData.company}/>
          </DashboardHeader>
          <Aside>
            <NavigationList>
              <NavItem>
                <NavButton active={activeView === "overall" ? true : false} onClick={() => setActiveView("overall")}>
                  Pulpit
                </NavButton>
              </NavItem>
              <NavItem>
                <NavButton active={activeView === "taxes" ? true : false} onClick={() => setActiveView("taxes")}>Podatki</NavButton>
              </NavItem>
              <NavItem>
                <NavButton active={activeView === "invoices" ? true : false} onClick={() => setActiveView("invoices")}>Faktury</NavButton>
              </NavItem>
              <NavItem>
                <NavButton active={activeView === "costs" ? true : false} onClick={() => setActiveView("costs")}>Wydatki</NavButton>
              </NavItem>
              <NavItem>
                <NavButton active={activeView === "tasks" ? true : false} onClick={() => setActiveView("tasks")}>Zadania</NavButton>
              </NavItem>
            </NavigationList>
          </Aside>
          <DashboardContent>
            {activeView === "overall" 
            ? <OverallData modalFn={setTransactionModal}/> 
            : null}
            {activeView === "taxes" 
            ? <Taxes/> 
            : null}
            {transactionModal ? 
            (
              <AddTransactionModal modalFn={setTransactionModal} transactionModal={transactionModal}/>
            ):("")}
          </DashboardContent>
        </DashboardWrapper>
  )
};

export default DashboardView;