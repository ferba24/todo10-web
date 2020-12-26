import { createContext } from 'react'

const FormContext = createContext({
  values: {},
  updateValues: () => {},
  addItem: () => {},
  inputProps: {},
})
export default FormContext