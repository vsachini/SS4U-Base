import React from 'react';
import Upload from './';
import { CloudUpload } from '@material-ui/icons/';

export default {
  title: 'ui/Upload',
  component: Upload,
};

export const basic = () => <Upload startIcon={ <CloudUpload /> } variant='contained' color='primary' name='staff.pictureFile' label='Upload' accept='image/*' />