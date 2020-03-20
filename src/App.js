import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import InputText from './components/ui/TextInput';

function App() {

  const { register, handleSubmit, errors, setValue, control } = useForm()
const staff = {
  state: 'QLD'
}
  React.useEffect(() => {
    // setValue('state', 456, true)
  }, [ setValue, staff ])

  return (

    <form onSubmit={ handleSubmit(() => console.log('a') )}>
      <Grid container spacing={ 2 } >
        <Grid item xs={ 12 } md={ 5 }>
          <InputText label='State' name='state' inputRef={ register({ required: true, maxLength: 3 })} errors={ errors } control={ control } />
        </Grid>
      </Grid>
    </form>
    
  )
}

export default App;
