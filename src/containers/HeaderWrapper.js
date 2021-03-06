import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { navigate } from "@reach/router";

const Header = styled.header`
  height: 75px;
  background-color: white;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.25);
  padding: 0 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const HeaderWrapper = () => {
  return (
      <Header>
        <Logo/>
        <Button colorstyle="gradient" onClick={() => navigate("../dashboard")}>wersja demo</Button>
      </Header>
  )
}

export default HeaderWrapper;
