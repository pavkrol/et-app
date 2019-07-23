import React from 'react';
import { render } from "react-dom";
import styled from 'styled-components';
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Layout/> 
  )
};

render(<App />, document.getElementById("root"));

