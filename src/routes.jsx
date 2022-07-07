import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components";


import Home from './containers/Home';
import About from './containers/AboutUs';
import Privacy from './containers/Privacy';

const Layout = styled.div`
  min-height: calc(100% - 140px);
  max-width: 1400px;
  margin: auto;
`;

function AppRoutes() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      {/* <Route path="*" element={<div />} /> */}
    </Routes>
    </Layout>
  );
}

export default AppRoutes;
