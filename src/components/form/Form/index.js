import React from 'react'
import FormContainer from './form'
import { FormProvider } from './context'

const Form = props => {

  return (
    <FormProvider>
      <FormContainer handlesubmit={ props.handlesubmit } className={ props.className }>
        { props.children }
      </FormContainer>
    </FormProvider>
  )

}

export default Form