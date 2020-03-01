import errorMessages from './errorMessages'

export const getErrorMessage = (err) => {
  return errorMessages[err.type] ? errorMessages[err.type] : `Default message not found for the error type ${ err.type }`
}