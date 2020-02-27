import React from 'react'
import { makeStyles, FormControlLabel } from '@material-ui/core'
import errorMessages from './errorMessages'
import FormContext from '../../form/Form/context'
import MaterialCheckbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.font,
    fontSize: '.8em'
  },
  errorMessage: {
    fontSize: '.6em',
    color: 'rgba(255, 0, 0, .8)'
  }
}))

const Checkbox = props => {

  const classes = useStyles()

  const options = {
    label: 'Input Text',
    name: 'inputText',
    ...props
  }

  const validations = {
    required: props.required,
  }

  const context = React.useContext(FormContext)

  if (!context) throw new Error('The Checkbox must be used inside the Form')

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
      <FormControlLabel
        control={
          <MaterialCheckbox
            checked={ options.checked }
            onChange={ options.handleChange }
            value="checkedB"
            color="primary"
            inputRef={ actions.register( validations ) }
            name={ options.name }
          />
        }
        label={ options.label }
      />

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

export default Checkbox