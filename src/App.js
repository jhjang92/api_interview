import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import BoardListPage from './pages/BoardListPage';
import BoardWritePage from './pages/BoardWritePage';
import styled from 'styled-components';

function App() {
  const Box = styled.div`
    width: 800px;
    margin: 0 auto;
  `;
  return (
    <Box>
      <Route component={BoardListPage} path={['/@:nickname', '/']} exact />
      <hr />
      <Route component={BoardWritePage} path={'/'} />
    </Box>
  );
}

export default App;
