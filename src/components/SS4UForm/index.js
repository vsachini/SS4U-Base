import React from 'react'
import { SS4UFormProvider } from './context'
import Form from './form'

const SS4UForm = props => {

  return (
    <SS4UFormProvider>
      <Form handlesubmit={ props.handlesubmit } className={ props.className }>
        { props.children }
      </Form>
    </SS4UFormProvider>
  )

}

export default SS4UForm