import React from 'react';
import DoubleColumn from './';
import Login from '../../form/Login'

export default {
  title: 'layout/DoubleColumn',
  component: DoubleColumn,
};

export const basic = () => <DoubleColumn logo='assets/img/logo.png' > <Login /> </DoubleColumn>;

