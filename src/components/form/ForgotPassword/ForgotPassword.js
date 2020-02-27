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

const ForgotPassword = ({ onSendRequest, title = 'SS4U' }) => {


  const { register, handleSubmit, errors } = useForm()
  const classes = useStyles();

  const onSubmit = data => onSendRequest(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h1'> {title} </Typography>
            <Typography variant='subtitle2'>Enter your email and we send you a password reset link.</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth={true} name="email" inputRef={register({ required: true })} label='Email *' />
            {errors.email && <Typography display='block' variant='caption' align='left' color='error'> This field is required. </Typography>}

          </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color='primary' type='submit'> Send Request </Button>
            </Grid>

        </Grid>
      </div>
    </form>
  );
}

export default ForgotPassword;