import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Dashboard, People, CalendarToday, Spa, Laptop } from '@material-ui/icons';
import Menu from './components/ui/Menu';

import Login from './components/form/Login'

// import SS4ULogin from '@bit/smart-solution-4u.form.s-s4-u-login';

function App() {

  const menuSchema = [
    {label: 'Dashboard', icon: <Dashboard />, to:'/'},
    {label: 'Appointments', icon: <CalendarToday />, to:'/appointments'},
    {label: 'Treatments', icon: <Spa />, to:'/treatments'},
    {label: 'Customers', icon: <People />, to:'/customers'},
    {label: 'Staff', icon: <Laptop />, to:'/staff'},

    // {label: 'Website', icon: <Language  />, to:'website',  submenu: [
    //   {label: 'Banners', icon: <Panorama />, to: '/admin/website/banner'},
    //   {label: 'Blog', icon: <PostAdd />, to: '/admin/website/blog'},
    //   {label: 'Products', icon: <Loyalty />, to: '/admin/website/product'},
    //   {label: 'Contact', icon: <ModeComment />, to: '/admin/website/contact'},
    // ]},
    // {label: 'Expenses', icon: <AttachMoney />, to:'/dashboard'}
  ]

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ () => {
          return (
            <div>
              <Menu type='mini' schema={ menuSchema } />
            </div>
          )
        }} />
        {<Route path='/signup' component={ Login } />
        /* 
        <Route path='/forgotpassword' component={ SS4UForgotPassword } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
