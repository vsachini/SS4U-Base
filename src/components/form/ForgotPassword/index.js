import React from 'react'
import { makeStyles, Grid, Button, Hidden } from '@material-ui/core'
import Form from '../Form'
import TextInput from '../../ui/TextInput'

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
  }
}))

const ForgotPassword = props => {

  const classes = useStyles()

  const handleSubmit = e => {
    console.log('a')
  }

  return (
    <Grid container spacing={ 0 } className={ classes.root } >
      <Hidden smDown>
        <Grid item sm={ 6 } className={ classes.leftColumn } >
          <img src='assets/img/logo.png' alt='logo' />
        </Grid>
      </Hidden>
      <Grid item xs={ 12 } sm={ 6 } className={ classes.rightColumn } >
        <Hidden smUp>
          <img src='assets/img/logo.png' alt='logo' className={ classes.mobileLogo } />
        </Hidden>

        <span className={ classes.title } > { process.env.REACT_APP_COMPANY_NAME } </span>
        <span className={ classes.subtitle } > Enter your email and you will receive a link to reset your password. </span>
        <Form className={ classes.form } handlesubmit={ handleSubmit }>

          <TextInput label='Email' name='email' type='email' required />
          
          <div className={ classes.buttonsContainer }>
            <Button variant="contained" type='submit'> Send </Button>
          </div>
        </Form>
      </Grid>
    </Grid>
  )
}

export default ForgotPassword