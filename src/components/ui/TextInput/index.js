import React from 'react'
import { TextField } from '@material-ui/core'
import ErrorMessage from '../ErrorMessage'

const TextInput = ({ onChange, label='Input Text', name='inputText', errors, ...props }) => {

  return (
    <div>
      <TextField name={ name } label={ label } { ...props } />
      { errors && errors[name] && <ErrorMessage name={ name } errors={ errors } /> }
    </div>
  )
}

export default TextInput