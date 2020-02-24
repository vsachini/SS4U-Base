import React from 'react'
import { useForm } from 'react-hook-form';

const SS4UFormContext = React.createContext()

export const SS4UFormProvider = props => {
  
  // const [ state, setState ] = useState({ form: useForm() });
  const actions = useForm()

  // const actions = React.useMemo(() => ({
  //   setForm: form => setState(st => ({
  //     ...st,
  //     form
  //   }))
  // }), [ setState ])

  return <SS4UFormContext.Provider value={{ actions }}> { props.children } </SS4UFormContext.Provider>
}

export const SS4UFormConsumer = SS4UFormContext.Consumer
export default SS4UFormContext