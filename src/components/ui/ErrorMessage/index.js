import React from 'react'
import { Typography } from '@material-ui/core'
import { getErrorMessage } from '../DefaultErrorMessages'

const ErrorMessage = ({ name, errors }) => {

  const [ message, setMessage ] = React.useState('')

  React.useEffect(() => {
    if (errors[name] && errors[name].message) {
      setMessage(errors[name].message)
    } else {
      setMessage( getErrorMessage(errors[name]) )
    }
  }, [ errors, name ])

  return message && <Typography display='block' variant='caption' align='left' color='error'> { message } </Typography>
}

export default ErrorMessage