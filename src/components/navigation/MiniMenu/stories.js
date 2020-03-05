import React from 'react';
import MiniMenu from './';
import { Dashboard, CalendarToday, Spa, People, Laptop } from '@material-ui/icons';

export default {
  title: 'navigation/Mini-Menu',
  component: MiniMenu,
};

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

export const basic = () => <MiniMenu schema={ menuSchema } logo='assets/img/logo_menu.png' companyName='SS4U' user={{ name: 'Julien Carr' }} />;