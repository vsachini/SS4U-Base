import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'
import ErrorMessage from '../ErrorMessage'
import TextMaskCustom from './TextMaskCustom';

const useStyles = makeStyles( theme => ({
  input: {
    width: '100%'
  },
  label: {
    marginTop: '15px'
  },
  disabled: {
    backgroundColor: '#f6f6f6'
  }
}))

const TextInput = React.memo(({ label='Input Text', name='inputText', errors, shrink = true, mask = false, variant = 'outlined',  ...props }) => {

  const classes = useStyles()
  const nestedName = name.indexOf('.') >= 0 ? name.split('.') : null

  return (
    <div className={ classes.label }>
      <TextField name={ name } label={ label } className={ `${ classes.input } ${ props.disabled ? classes.disabled : '' }` } InputLabelProps={{ shrink: shrink }} variant={ variant } InputProps={{ inputComponent: TextMaskCustom }} inputProps={{ mask: mask ? mask : false, guide: false }} inputRef={ props.inputRef } { ...props } />
      { errors && (errors[name] || (nestedName && errors?.[nestedName[0]]?.[nestedName[1]])) && <ErrorMessage name={ name } errors={ errors } control={ props.control } /> }
    </div>
  )
})

export default TextInput