import React from 'react'
import { Typography } from '@material-ui/core'
import { getErrorMessage } from '../DefaultErrorMessages'

const ErrorMessage = ({ name, errors }) => {

  const [ message, setMessage ] = React.useState('')

  React.useEffect(() => {
    const nestedName = name.indexOf('.') >= 0 ? name.split('.') : null
    const err = nestedName ? errors?.[nestedName[0]]?.[nestedName[1]] : errors[name]

    if (err.message) {
      setMessage(err.message)
    } else {
      setMessage(getErrorMessage(err))
    }
  }, [ errors, name ])

  return message && <Typography display='block' variant='caption' align='left' color='error'> { message } </Typography>
}

export default ErrorMessage