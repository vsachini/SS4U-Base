import React from 'react';
import FixedMenu from './';
import MailIcon from '@material-ui/icons/Mail';

export default {
  title: 'navigation/Fixed-Menu',
  component: FixedMenu,
};

const listMenu = [
  {
    label: "Menu1",
    icon: <MailIcon />,
  }
]

export const basic = () => <FixedMenu list={listMenu} />;