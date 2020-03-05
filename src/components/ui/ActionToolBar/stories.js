import React from 'react';
import ActionToolBar from './';
import { Button } from '@material-ui/core';

export default {
  title: 'ui/ActionToolBar',
  component: ActionToolBar,
};

export const basic = () => <ActionToolBar> 
  <Button variant='contained' color='primary'> Save </Button>
  <Button variant='outlined' color='primary'> Go Back </Button>
</ActionToolBar>;