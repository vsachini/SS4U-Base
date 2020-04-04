import React from 'react'
import { FormControl, Select as MaterialSelect, InputLabel, makeStyles, MenuItem } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';

const useStyles = makeStyles( theme => ({
  input: {
    width: '100%',
    marginTop: '15px'
  },
  disabled: {
    backgroundColor: '#f6f6f6'
  }
}))

const Select = ({ shrink = true, name, errors, required, control, ...props }) => {

  const classes = useStyles()
  const nestedName = name.indexOf('.') >= 0 ? name.split('.') : null

  const onChange = React.useCallback(([selected]) => {
    return selected.target.value
  }, [])

  return (
    <FormControl className={ classes.input } error={ Boolean(errors[name]) } variant='outlined' >
      <InputLabel id={ `${ name }${ props.id ? props.id : '' }${ props.label }` } shrink={ shrink } > { props.label } </InputLabel>
      <Controller
        as={
          <MaterialSelect notched className={ props.disabled ? classes.disabled : '' } >
            <MenuItem value=''>None</MenuItem>
            { props.children }
          </MaterialSelect>
        }
        name={ name }
        rules={{ required }}
        control={ control }
        onChange={ onChange }
        label={ props.label }
        labelId={ `${ name }${ props.id ? props.id : '' }${ props.label }` }
        defaultValue={''}
      />
      { errors && (errors[name] || (nestedName && errors?.[nestedName[0]]?.[nestedName[1]])) && <ErrorMessage name={ name } errors={ errors } /> }
    </FormControl>
  );
}

export default Select