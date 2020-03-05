import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import defaultLogo from './logo.png'
import { Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  leftColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.dark
  },
  rightColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    width: '35em'
  }
}));

const DoubleColumn = ({ logo, ...props }) => {
  const classes = useStyles();
  const logoFinal = logo ? logo : defaultLogo;

  return (
    <Grid container spacing={ 0 } className={ classes.root }>

      <Hidden smDown>
        <Grid item xs={ 6 } className={ classes.leftColumn }>
          <img src={ logoFinal } alt='logo' className={ classes.logo } />
        </Grid>
      </Hidden>


      <Grid item xs={ 12 } sm={ 12 } md={ 6 } className={ classes.rightColumn } >
        { props.children }
      </Grid>

    </Grid>
  );
}

export default DoubleColumn;