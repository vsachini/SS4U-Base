import React from 'react'
import { makeStyles, Grid, Button, Hidden } from '@material-ui/core'
import Form from '../Form'
import TextInput from '../../ui/TextInput'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  buttonLink: {
    fontSize: '.8em',
    color: theme.palette.primary.text.color,
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
}))

const Login = props => {

  const classes = useStyles()
  const [ login, setLogin ] = React.useState({})

  const handleChange = React.useCallback(({ name, value }) => {
    setLogin(c => ({ ...c, [name]: value }))
  }, [])

  const handleSubmit = () => {
    props.onLogin( login )
  }

  return (
    <Grid container spacing={ 0 } className={ classes.root } >
      <Hidden smDown>
        <Grid item sm={ 6 } className={ classes.leftColumn } >
          <img src={ `assets/img/${ process.env.REACT_APP_LOGO }` } alt='logo' />
        </Grid>
      </Hidden>
      <Grid item xs={ 12 } sm={ 6 } className={ classes.rightColumn } >
        <div className={ classes.titleContainer }>
          <Hidden smUp>
            <img src={ `assets/img/${ process.env.REACT_APP_LOGO }` } alt='logo' className={ classes.mobileLogo } />
          </Hidden>

          <span className={ classes.title } > { process.env.REACT_APP_COMPANY_NAME } </span>
          <span className={ classes.subtitle } > Welcome back! Please login to your account. </span>
        </div>

        <Form className={ classes.form } handlesubmit={ handleSubmit }>
          <TextInput label='Username' name='username' value={ login.username || '' } onChange={ handleChange } required maxLength={ 4 } />
          <TextInput label='Password' name='password' type='password' value={ login.password || '' } onChange={ handleChange } required />

          <div className={ classes.forgotPass }>
            <Button onClick={ props.handleForgotPassword } className={ `${ classes.buttonLink } ${ !props.handleForgotPassword && classes.dNone }` }> Forgot Password </Button>
          </div>

          <div className={ classes.buttonsContainer }>
            <Button variant="contained" type='submit'> Login </Button>
            <Button variant="outlined" onClick={ props.handleSignUp } className={ `${ !props.handleSignUp && classes.dNone }` }> Sign up </Button>
          </div>
        </Form>
      </Grid>
    </Grid>
  )
}

export default Login