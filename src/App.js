import React from 'react';
import './App.css';

import MiniMenu from './components/navigation/MiniMenu/MiniMenu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard, CalendarToday, Spa, People, Laptop } from '@material-ui/icons';

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
        <Route exact path='/' render={ () => <MiniMenu schema={ menuSchema } logo='assets/img/logo_menu.png' companyName='SS4U' user={{ name: 'Julien Carr' }} /> } />
        <Route exact path='/staff' render={ () => <MiniMenu schema={ menuSchema } logo='assets/img/logo_menu.png' companyName='SS4U' user={{ name: 'Jstass' }} /> } />
        <Route exact path='/treatments' render={ () => <div> treatments </div> } />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App;
