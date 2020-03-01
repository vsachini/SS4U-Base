import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'
import ErrorMessage from '../ErrorMessage'

const useStyle = makeStyles( theme => ({
  input: {
    width: '100%'
  }
}))

const TextInput = ({ onChange, label='Input Text', name='inputText', errors, ...props }) => {

  const classes = useStyle()

  return (
    <div>
      <TextField name={ name } label={ label } { ...props } className={ classes.input } />
      { errors && errors[name] && <ErrorMessage name={ name } errors={ errors } /> }
    </div>
  )
}

export default TextInput