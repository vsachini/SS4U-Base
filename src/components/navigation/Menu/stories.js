import React from 'react';
import Menu from './';
import MailIcon from '@material-ui/icons/Mail';

export default {
  title: 'navigation/Menu',
  component: Menu,
};

const listMenu = [
  {
    label: "Menu1",
    icon: <MailIcon />,
  }
]

export const basic = () => <Menu list={listMenu} />;