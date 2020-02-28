import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import defaultLogo from './logo.png'

import 'bootstrap/dist/css/bootstrap.min.css';
// Remover o style.css e inserir os styles in CSS-in-JS
import './style.css';

const useStyles = makeStyles(theme => ({
  bgIndigo: {
    background: theme.palette.primary.dark,
  },
  leftColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`
  },
}));

const DoubleColumn = ({logo, children}) => {
  const classes = useStyles();
  const logoFinal = logo ? logo : defaultLogo;

  return (
    <div className="d-md-flex h-md-100 align-items-center">
      <div className={`col-md-6 p-0 ${classes.bgIndigo} h-md-100 ${classes.leftColumn}`}>
        <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
          <div className="logoarea pt-5 pb-5">
            <img src={logoFinal} alt='logo' />
          </div>
        </div>
      </div>
      <div className="col-md-6 p-0 bg-white h-md-100 loginarea">
        <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DoubleColumn;