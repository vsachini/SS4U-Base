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



const Signup = ({ onSignup, title = 'SS4U' }) => {


  const { register, handleSubmit, errors } = useForm()
  const classes = useStyles();

  const onSubmit = data => onSignup(data)

  const MyTextInput = ({ name, label, required = false, ...props }) => (
    <>
      <TextField fullWidth={true} name={name} label={`${label} ${required ? '*' : ''}`} {...props} />
      {errors[name] && <Typography display='block' variant='caption' align='left' color='error'> This field is required. </Typography>}
    </>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h1'> {title} </Typography>
            <Typography variant='subtitle2'>Please complete to create your account.</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth={true} name="firstname" inputRef={register({ required: true })} label='First name *' />
            {errors.firstname && <Typography display='block' variant='caption' align='left' color='error'> This field is required. </Typography>}
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth={true} name="lastname" inputRef={register({ required: true })} label='Last name *' />
            {errors.lastname && <Typography display='block' variant='caption' align='left' color='error'> This field is required. </Typography>}
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth={true} name="username" inputRef={register({ required: true })} label='Username *' />
            {errors.username && <Typography display='block' variant='caption' align='left' color='error'> This field is required. </Typography>}
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth={true} name="email" inputRef={register({ required: true })} label='Email *' />
            {errors.email && <Typography display='block' variant='caption' align='left' color='error'> This field is required. </Typography>}
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth={true} name="password" type="password" inputRef={register({ required: true })} label='Password *' />
            {errors.password && <Typography display='block' variant='caption' align='left' color='error'> This field is required. </Typography>}
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth={true} name="confirmPassword" type="password" inputRef={register({ required: true })} label='Confirm Password *' />
            {errors.confirmPassword && <Typography display='block' variant='caption' align='left' color='error'> This field is required. </Typography>}
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color='primary' type='submit'> Sign up </Button>
          </Grid>

          <Grid item xs={12}>
            <Button href="#text-buttons"> Already have an account? Login </Button>
          </Grid>


        </Grid>
      </div>
    </form>
  );
}

export default Signup;