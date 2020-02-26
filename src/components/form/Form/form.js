import React from 'react'
import FormContext from './context'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '2em'
  }
}))

const FormContainer = props => {

  const classes = useStyles()
  const { actions } = React.useContext(FormContext)

  return (
    <form onSubmit={ actions.handleSubmit( props.handlesubmit ) } noValidate className={ `${ classes.root } ${ props.className }` } >
      { props.children }
    </form>
  )

}

export default FormContainer