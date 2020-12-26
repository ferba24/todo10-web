import { createContext } from 'react'

const SelectContext = createContext({
  value: undefined,
  setValue: () => {},
  addToValues: () => {}
})
export default SelectContext