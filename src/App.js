import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { Grid, Button, MenuItem } from '@material-ui/core';
import Select from './components/ui/Select/Select';

function App() {

  const { register, handleSubmit, errors, setValue, control } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (

    <form onSubmit={ handleSubmit( onSubmit )}>
      <Grid container spacing={ 2 } >
        <Grid item xs={ 12 } md={ 5 }>
          <Select control={ control } label='State' name='state' errors={ errors } required>
            <MenuItem value='QLD'>QLD</MenuItem>
            <MenuItem value='NSW'>NSW</MenuItem>
            <MenuItem value='WA'>WA</MenuItem>
          </Select>


        </Grid>
      </Grid>

      <Button variant='contained' color='primary' type='submit'> submit </Button>
    </form>
    
  )
}

export default App;
