import React from 'react'
import { makeStyles, Grid, Button, Hidden } from '@material-ui/core'
import Form from '../Form'
import Checkbox from '../../ui/Checkbox'
import Link from '../../ui/Link'
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
  mobileLogo: {
    width: '10em'
  },
  title: {
    color: theme.palette.title.color,
    fontSize: '1.8em',
    letterSpacing: '.5rem',
    margin: '.2em 0',
    fontWeight: 'bold'
  },
  subtitle: {
    color: theme.palette.subtitle.color
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '2em'
  }
}))

const Signup = props => {

  const [ signup, setSignup ] = React.useState({})
  const classes = useStyles()

  const handleSubmit = e => {
    props.handleSubmit(signup)
  }

  const handleChange = React.useCallback(({ name, value }) => {
    setSignup(c => ({ ...c, [name]: value }))
  }, [])

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
        <span className={ classes.subtitle } > Please complete to create your account. </span>
        
        <Form className={ classes.form } handlesubmit={ handleSubmit }>

          <TextInput label='First name' name='firstname' required value={ signup.firstname || '' } onChange={ handleChange } />
          <TextInput label='Last name' name='lastname' required value={ signup.lastname || '' } onChange={ handleChange } />

          <TextInput label='Username' name='username' required value={ signup.username || '' } onChange={ handleChange } />
          <TextInput label='Email' name='email' required value={ signup.email || '' } onChange={ handleChange } />
          <TextInput label='Password' type='password' name='password' required value={ signup.password || '' } onChange={ handleChange } />
          <TextInput label='Confirm Password' type='password' name='confirmpassword' required value={ signup.confirmpassword || '' } onChange={ handleChange } />
          
          <Checkbox label='I agree with terms and conditions' required />

          <div className={ classes.buttonsContainer }>
            <Button variant="contained" type='submit'> Sign up </Button>
          </div>
        </Form>

        <Link label='Already have an account? Login' href='#' />
      </Grid>
    </Grid>
  )
}

export default Signup