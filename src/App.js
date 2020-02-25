import React from 'react';
import './App.css';
import SS4ULogin from './components/SS4ULogin';
import SS4USignup from './components/SS4USignup';
import SS4UForgotPassword from './components/SS4UForgotPassword';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import SS4ULogin from '@bit/smart-solution-4u.form.s-s4-u-login';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ SS4ULogin } />
        <Route path='/signup' component={ SS4USignup } />
        <Route path='/forgotpassword' component={ SS4UForgotPassword } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
