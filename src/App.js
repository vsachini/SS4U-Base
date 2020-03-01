import React from 'react';
import './App.css';

import DoubleColumn from './components/layout/double-column'
import ForgotPasswordForm from './components/form/ForgotPassword'
import config from './config/config'

function App() {
  return (
    <DoubleColumn logo={ config.logoPath } >
      <ForgotPasswordForm logo={ config.logoPath } title={ config.companyName } />
    </DoubleColumn>
  )
}

export default App;
