import React from 'react';
import Signup from './';

import { action } from '@storybook/addon-actions';

export default {
  title: 'form/Signup',
  component: Signup,
};

export const basic = () => <Signup onSignup={action('Signup-click')}  logo='assets/img/logo.png' />;