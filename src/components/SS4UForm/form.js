import React from 'react'
import SS4UFormContext from './context'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '2em'
  }
}))

const Form = props => {

  const classes = useStyles()
  const { actions } = React.useContext(SS4UFormContext)

  return (
    <form onSubmit={ actions.handleSubmit( props.handlesubmit ) } noValidate { ...props } className={ `${ classes.root } ${ props.className }` } >
      { props.children }
    </form>
  )

}

export default Form