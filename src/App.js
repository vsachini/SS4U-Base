import React from 'react';
import './App.css';

import DoubleColumn from './components/layout/double-column'
import LoginForm from './components/form/Login'
import config from './config/config'

function App() {
  return (
    <DoubleColumn logo={ config.logoPath } >
      <LoginForm logo={ config.logoPath } title={ config.companyName } />
    </DoubleColumn>
  )
}

export default App;
