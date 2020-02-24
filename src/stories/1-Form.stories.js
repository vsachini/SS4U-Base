import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import SS4UTextField from '../components/SS4UTextField';
import SS4UForm from '../components/SS4UForm';

export default {
  title: 'Form'
};

export const ActionButton = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Input = () => (
  <SS4UForm>
    <SS4UTextField label='Input Text' />
  </SS4UForm>
)