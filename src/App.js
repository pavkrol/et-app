import React from 'react';
import { render } from "react-dom";
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: peru;
`;

const Header = styled.h1`
  color: darkblue;
  font-size: 30px;
  font-family: sans-serif;
`;

const App = () => {
  return (
    <Container>
      <Header>Test header</Header>
    </Container>
  )
};

render(<App />, document.getElementById("root"));

