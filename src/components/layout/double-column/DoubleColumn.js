import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import defaultLogo from './logo.png'
import { Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  leftColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.dark
  },
}));

const DoubleColumn = ({logo, ...props }) => {
  const classes = useStyles();
  const logoFinal = logo ? logo : defaultLogo;

  return (
    <Grid container spacing={ 0 }>

      <Hidden smDown>
        <Grid item xs={ 6 } className={ classes.leftColumn }>
          <img src={ logoFinal } alt='logo' />
        </Grid>
      </Hidden>

      <Grid item xs={ 12 } sm={ 12 } md={ 6 } >
        { props.children }
      </Grid>

    </Grid>
  );
}

export default DoubleColumn;