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
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    color: theme.palette.primary.title.color,
    fontSize: '1.8em',
    letterSpacing: '.5rem',
    margin: '.2em 0',
    fontWeight: 'bold'
  },
  subtitle: {
    color: theme.palette.primary.subtitle.color
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '2em'
  },
  forgotPass: {
    textAlign: 'center'
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
        <div className={ classes.titleContainer }>
          <span className={ classes.title } > { process.env.REACT_APP_COMPANY_NAME } </span>
          <span className={ classes.subtitle } > Welcome back! Please login to your account. </span>
        </div>

        <SS4UForm className={ classes.form } handlesubmit={ handleSubmit }>
          <SS4UTextField label='Username' name='username' required />
          <SS4UTextField label='Password' name='password' type='password' required />

          <div className={ classes.forgotPass }>
            <SS4ULink label='Forgot Password' href='#' />
          </div>

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