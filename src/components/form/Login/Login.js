import React from 'react'
import { makeStyles, Grid, Button, Hidden, Typography } from '@material-ui/core'
import TextInput from '../../ui/TextInput'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%'
  },
  buttonContainer: {
    marginTop: '1.5em',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
}))

const Login = ({ handleForgotPassword, handleSignUp, onLogin, logo, title }) => {

  const { register, handleSubmit, errors } = useForm()
  const classes = useStyles()

  return (
    <Grid container spacing={ 0 } className={ classes.root } >
      <Grid item xs={ 12 }>
        <Hidden smUp>
          <img src={ logo } alt='logo' />
        </Hidden>

        <Typography variant='h1'> { title } </Typography>
        <Typography variant='subtitle2'> Welcome back! Please login to your account. </Typography>
        
        <form onSubmit={ handleSubmit( onLogin ) }>
          <TextInput label='Username' name='username' inputRef={ register({ required: true })} errors={ errors } />
          <TextInput label='Password' name='password' type='password' inputRef={ register({ required: true })} errors={ errors } />

          <Grid item xs={ 12 }>
            { handleForgotPassword ? <Button onClick={ handleForgotPassword } > Forgot Password </Button> : null }
          </Grid>

          <Grid item xs={ 12 } className={ classes.buttonContainer }>
            <Button variant="contained" color="primary" type='submit'> Login </Button>
            { handleSignUp ? <Button variant="outlined" color="secondary" onClick={ handleSignUp } > Sign up </Button> : null }
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default Login