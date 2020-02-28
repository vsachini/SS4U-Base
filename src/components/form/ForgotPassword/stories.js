import React from 'react';
import ForgotPassword from './';

import { action } from '@storybook/addon-actions';

export default {
  title: 'form/ForgotPassword',
  component: ForgotPassword,
};

export const basic = () => <ForgotPassword
  onSendRequest={action('send-request-click')}
  title="My Title"
/>;