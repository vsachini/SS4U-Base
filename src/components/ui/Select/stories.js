import React from 'react';
import Select from './Select';
import { MenuItem } from '@material-ui/core';
import { useForm } from 'react-hook-form';

export default {
  title: 'ui/Select',
  component: Select,
};

export const Basic = () => {
  const { register, handleSubmit, errors, setValue, getValues, control } = useForm()

  const onsubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={ handleSubmit(onsubmit)}>
      <Select label='State' name='staff.state' errors={ errors } control={ control }>
        <MenuItem value='QLD'> QLD </MenuItem>
        <MenuItem value='NSW'> NSW </MenuItem>
      </Select>
    </form>
  )
}