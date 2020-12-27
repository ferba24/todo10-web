import { createContext } from 'react'

const SelectContext = createContext({
  multiple: false,
  value: [],
  setValue: () => {},
  addToOptions: () => {}
})
export default SelectContext