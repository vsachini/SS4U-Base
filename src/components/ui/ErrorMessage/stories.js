import React from 'react';
import ErrorMessage from './';

export default {
  title: 'ui/ErrorMessage',
  component: ErrorMessage,
};

export const basic = () => <ErrorMessage name='test' errors={{ test: { type: 'required' }}} />;