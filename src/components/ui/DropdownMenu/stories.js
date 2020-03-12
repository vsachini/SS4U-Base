import React from 'react';
import DropdownMenu from '.';
import { MoreVert } from '@material-ui/icons';

export default {
  title: 'ui/DropdownMenu',
  component: DropdownMenu,
};

export const basic = () => <DropdownMenu buttonLabel={ <MoreVert /> } />;