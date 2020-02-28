import React from 'react';
import { TextField, makeStyles, Button, Grid, Typography } from '@material-ui/core'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    width: '350px'
  }
}));

const Login = ({ onLogin, title = 'SS4U' }) => {


  const { register, handleSubmit, errors } = useForm()
  const classes = useStyles();

  const onSubmit = data => onLogin(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h1'> {title} </Typography>
            <Typography variant='subtitle2'>Welcome back! Please login to your account.</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth={true} name="username" inputRef={register({ required: true })} label='Username *' />
            {errors.username && <Typography display='block' variant='caption' align='left' color='error'> This field is required. </Typography>}

          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth={true} name="password" inputRef={register({ required: true })} label='Password *' />
            {errors.password && <Typography display='block' variant='caption' align='left' color='error'> This field is required. </Typography>}
          </Grid>

          <Grid item xs={12}>
            <Button href="#text-buttons"> Forgot Password </Button>
          </Grid>

          <Grid container>
            <Grid item xs={6}>
              <Button variant="contained" color='primary' type='submit'> Login </Button>
            </Grid>

            <Grid item xs={6}>
              <Button variant="outlined" color='secondary'> Sign up </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}

export default Login;