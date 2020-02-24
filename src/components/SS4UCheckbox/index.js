import React from 'react'
import { makeStyles } from '@material-ui/core'
import SS4UFormContext from '../SS4UForm/context'
import errorMessages from './errorMessages'

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.text.color,
    fontSize: '.8em'
  },
  errorMessage: {
    fontSize: '.6em',
    color: 'rgba(255, 0, 0, .8)'
  }
}))

const SS4UCheckbox = props => {

  const classes = useStyles()
  const randomNo = Math.random()

  const options = {
    label: 'Input Text',
    name: 'inputText',
    ...props
  }

  const validations = {
    required: props.required,
  }

  const context = React.useContext(SS4UFormContext)

  if (!context) throw new Error('The SS4UCheckbox must be used inside the SS4UForm')

  const [ validationError, setValidationError ] = React.useState({ type:'', message: '' })
  const { actions } = context

  React.useEffect(() => {
    const err = actions.errors[options.name]
    if (err) {
      setValidationError({
        type: err.type,
        message: getMessage(err, [actions.control.fieldsRef.current[options.name][err.type]])
      })
    }
  }, [ actions.errors, options.name, actions.control.fieldsRef, options.value ])

  return (
    <div className={ classes.root }>
      <input { ...options } id={ options.id || `checkbox${ randomNo }`} ref={ actions.register( validations ) } type='checkbox' />
      <label for={ options.id || `checkbox${ randomNo }`}> { options.label } </label>
      { actions.errors[options.name] && validationError.type === actions.errors[options.name].type && <span className={ classes.errorMessage }> { validationError.message } </span> }
    </div>
  )
}

const getMessage = (err, complement) => {
  let message = errorMessages[err.type]
  let qty = message.match(/{/gi) ? message.match(/{/gi).length : 0

  for (let i = 0; i < qty; i++) {
    message = message.replace(`{${i}}`, complement[i])
  }

  return message
}

export default SS4UCheckbox