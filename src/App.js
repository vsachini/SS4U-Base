import React from 'react';
import './App.css';
import SS4ULogin from './components/form/Login';
// import SS4ULogin from '@bit/smart-solution-4u.form.s-s4-u-login';

function App() {

  const handleLogin = (details) => {
    console.log(details)
  }

  return (
    <SS4ULogin onLogin={ handleLogin } handleSignUp={ handleLogin} />
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path='/' component={ SS4ULogin } />
    //     <Route path='/signup' component={ SS4USignup } />
    //     <Route path='/forgotpassword' component={ SS4UForgotPassword } />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
