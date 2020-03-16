import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'
import ErrorMessage from '../ErrorMessage'

const useStyle = makeStyles( theme => ({
  input: {
    width: '100%'
  },
  label: {
    marginTop: '15px'
  }
}))

const TextInput = ({ label='Input Text', name='inputText', errors, shrink = true, variant = 'outlined',  ...props }) => {

  const classes = useStyle()
  const nestedName = name.indexOf('.') >= 0 ? name.split('.') : null

  return (
    <div className={ classes.label }>
      <TextField name={ name } label={ label } { ...props } className={ classes.input } InputLabelProps={{ shrink: shrink }} variant={ variant } />
      { errors && (errors[name] || (nestedName && errors?.[nestedName[0]]?.[nestedName[1]])) && <ErrorMessage name={ name } errors={ errors } /> }
    </div>
  )
}

export default TextInput