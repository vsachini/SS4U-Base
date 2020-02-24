import React from 'react'
import SS4UFormContext from './context'

const Form = props => {

  const { actions } = React.useContext(SS4UFormContext)

  return (
    <form onSubmit={ actions.handleSubmit( props.handlesubmit ) } noValidate { ...props } >
      { props.children }
    </form>
  )

}

export default Form