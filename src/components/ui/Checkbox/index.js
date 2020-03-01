import React from 'react'
import { FormControlLabel } from '@material-ui/core'
import MaterialCheckbox from '@material-ui/core/Checkbox';
import ErrorMessage from '../ErrorMessage';

const Checkbox = ({ onChange, label='Input Text', name='inputText', errorMessage, ...props }) => {

  return (
    <div>
      <FormControlLabel label={ label } control= {
        <MaterialCheckbox
          checked={ props.checked }
          value="checkedB"
          color="primary"
          name={ name }
          { ...props }
        />
      } />

      { errorMessage && <ErrorMessage message={ errorMessage } /> }
    </div>
  )
}

export default Checkbox