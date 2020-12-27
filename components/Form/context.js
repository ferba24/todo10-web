import { createContext } from 'react'

const FormContext = createContext({
  updateValues: () => {},
  addItem: () => {},
  inputProps: {},
})
export default FormContext