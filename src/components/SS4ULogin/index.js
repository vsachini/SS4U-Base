import React from 'react'
import { makeStyles, Grid, Button } from '@material-ui/core'
import SS4UForm from '../SS4UForm'
import SS4UTextField from '../SS4UTextField';
import SS4ULink from '../SS4ULink';
// import SS4UForm from '@bit/smart-solution-4u.form.s-s4-u-form';
// import SS4UTextField from '@bit/smart-solution-4u.form.s-s4-u-text-field';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  form: {
    width: '20em'
  },
  leftColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    background: `linear-gradient(${ theme.palette.primary.login.primary }, ${ theme.palette.primary.login.secondary })`
  },
  rightColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100%'
  },
  title: {
    color: theme.palette.primary.title.color,
    fontSize: '1.2em',
    margin: '1em 0'
  },
  subtitle: {
    color: theme.palette.primary.subtitle.color
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '2em'
  }
}))

const SS4ULogin = props => {

  const classes = useStyles()

  const handleSubmit = e => {
    console.log('a')
  }

  return (
    <Grid container spacing={ 0 } className={ classes.root } >
      <Grid item sm={ 6 } className={ classes.leftColumn } >
        <img src='assets/img/logo.png' alt='logo' />
      </Grid>
      <Grid item xs={ 12 } sm={ 6 } className={ classes.rightColumn } >
        <span className={ classes.title } > { process.env.REACT_APP_COMPANY_NAME } </span>
        <span className={ classes.subtitle } > Welcome back! Please login to your account. </span>
        <SS4UForm className={ classes.form } handlesubmit={ handleSubmit }>
          <SS4UTextField label='Username' name='username' required={true} />
          <SS4UTextField label='Password' name='password' type='password' required />

          <SS4ULink label='Forgot Password' href='#' />

          <div className={ classes.buttonsContainer }>
            <Button variant="contained" type='submit'> Login </Button>
            <Button variant="outlined"> Sign up </Button>
          </div>
        </SS4UForm>
      </Grid>
    </Grid>
  )
}

export default SS4ULogin