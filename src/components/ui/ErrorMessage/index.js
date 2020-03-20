import React from 'react'
import { Typography } from '@material-ui/core'
import { getErrorMessage } from '../DefaultErrorMessages'

const ErrorMessage = ({ name, errors, control }) => {

  const [ message, setMessage ] = React.useState('')

  React.useEffect(() => {
    const nestedName = name.indexOf('.') >= 0 ? name.split('.') : null
    const err = nestedName ? errors?.[nestedName[0]]?.[nestedName[1]] : errors[name]

    if (err.message) {
      setMessage(err.message)
    } else {
      let msg = getErrorMessage(err)

      if (control) {
        let qty = msg.match(/{/gi) ? msg.match(/{/gi).length : 0
          for (let i = 0; i < qty; i++) {
            msg = msg.replace(`{${i}}`, control.fieldsRef.current[name][err.type])
          }
      }

      setMessage(msg)
    }
  }, [ errors, name, control ])

  return message && <Typography display='block' variant='caption' align='left' color='error'> { message } </Typography>
}

export default ErrorMessage