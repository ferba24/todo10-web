import { createContext } from 'react'

const RadioContext = createContext({
  value: undefined,
  setValue: () => {}
})
export default RadioContext