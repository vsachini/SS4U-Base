import React from 'react';
import { makeStyles, Button, Grid, Typography, Hidden } from '@material-ui/core'
import TextInput from '../../ui/TextInput';
import Checkbox from '../../ui/Checkbox';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%'
  },
  loginRedirect: {
    fontSize: '.8em'
  },
  buttonContainer: {
    marginTop: '1.5em',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
}));

const Signup = ({ onSignup, handleLogin, logo, title }) => {

  const { register, handleSubmit, errors } = useForm()
  const classes = useStyles();

  return (
    <Grid container spacing={ 0 } className={ classes.root } >

      <Grid item xs={ 12 }>
        <Hidden smUp>
          <img src={ logo } alt='logo' />
        </Hidden>

        <Typography variant='h1'> { title } </Typography>
        <Typography variant='subtitle2'> Please complete to create your account. </Typography>

        <form onSubmit={ handleSubmit( onSignup ) }>

          <TextInput label='First name' name='firstname' inputRef={ register({ required: true })} errors={ errors } />
          <TextInput label='Last name' name='lastname' inputRef={ register({ required: true })} errors={ errors } />

          <TextInput label='Username' name='username' inputRef={ register({ required: true })} errors={ errors } />
          <TextInput label='Email' name='email' inputRef={ register({ required: true })} errors={ errors } />
          <TextInput label='Password' name='password' type='password' inputRef={ register({ required: true })} errors={ errors } />
          <TextInput label='Confirm Password' name='password' type='password' inputRef={ register({ required: true })} errors={ errors } />
          
          <Checkbox label='I agree with terms and conditions' inputRef={ register({ required: true })} errors={ errors } />

          <Grid item xs={ 12 } >
            <Button variant="contained" color="primary" type='submit'> Sign up </Button>
          </Grid>
        </form>

        <Grid item xs={ 12 } className={ classes.buttonContainer }>
          <Button onClick={ handleLogin } className={ classes.loginRedirect } > Already have an account? Login </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Signup;