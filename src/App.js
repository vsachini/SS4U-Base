import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import TextInput from './components/ui/TextInput';
import { formatDateToInput } from './utils/Utils'

function App() {

  const { register, handleSubmit, errors, setValue } = useForm()

  React.useEffect(() => {
    setValue('firstname', 'test', true)
    setValue('createdAt', formatDateToInput(new Date().getTime()), true)
  }, [ setValue ])

  return (

    <form onSubmit={ handleSubmit(() => console.log('a') )}>
      <Grid container spacing={ 2 } >
        <Grid item xs={ 12 } md={ 5 }>
          <TextInput label='First Name' name='staff' inputRef={ register({ required: true })} errors={ errors } />
        </Grid>
      </Grid>
    </form>
    
  )
}

export default App;
