import { createContext } from 'react'

const SelectContext = createContext({
  value: undefined,
  setValue: () => {},
})
export default SelectContext