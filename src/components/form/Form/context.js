import React from 'react'
import { useForm } from 'react-hook-form';

const FormContext = React.createContext()

export const FormProvider = props => {
  
  // const [ state, setState ] = useState({ form: useForm() });
  const actions = useForm()

  // const actions = React.useMemo(() => ({
  //   setForm: form => setState(st => ({
  //     ...st,
  //     form
  //   }))
  // }), [ setState ])

  return <FormContext.Provider value={{ actions }}> { props.children } </FormContext.Provider>
}

export const FormConsumer = FormContext.Consumer
export default FormContext