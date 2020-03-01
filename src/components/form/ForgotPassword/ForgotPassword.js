import React from 'react';
import { makeStyles, Button, Grid, Typography, Hidden } from '@material-ui/core'
import TextInput from '../../ui/TextInput';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%'
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  buttonContainer: {
    marginTop: '1.5em',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
}));

const ForgotPassword = ({ onSendRequest, logo, title }) => {

  const { register, handleSubmit, errors } = useForm()
  const classes = useStyles();

  return (
    <Grid container spacing={ 0 } className={ classes.root } >
      <Grid item xs={ 12 } className={ classes.form }>
        <Hidden smUp>
          <img src={ logo } alt='logoMobile' />
        </Hidden>

        <Typography variant='h1'> { title } </Typography>
        <Typography variant='subtitle2'> Enter your email and you will receive a link to reset your password. </Typography>
      
        <form onSubmit={ handleSubmit( onSendRequest ) }>
          <TextInput label='Email' name='email' type='email' inputRef={ register({ required: true })} errors={ errors } />

          <Grid item xs={ 12 } className={ classes.buttonContainer } >
            <Button variant="contained" color="primary" type='submit'> Send </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default ForgotPassword;