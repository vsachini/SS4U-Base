import React from 'react';
import Login from './';

import { action } from '@storybook/addon-actions';

export default {
  title: 'form/Login',
  component: Login,
};

export const basic = () => <Login
  onLogin={action('login-click')}
  title="My Title"
/>;