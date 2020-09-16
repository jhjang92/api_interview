import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import BoardListPage from './pages/BoardListPage';
import BoardWritePage from './pages/BoardWritePage';
import styled from 'styled-components';

function App() {
  return (
    <Box>
      <Route component={BoardListPage} path={['/@:nickname', '/']} exact />
      <hr />
      <Route component={BoardWritePage} path={'/'} />
    </Box>
  );
}
const Box = styled.div`
  width: 800px;
  margin: 0 auto;
`;
export default App;
