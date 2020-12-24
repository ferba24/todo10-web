import SelectContext from './context'
import { useState } from 'react'

export default function Select({defaultValue, onChange, children }) {

  const [state, setState] = useState({
    value: defaultValue,
    setValue,
  })

  function setValue(value, rest) {
    setState({ ...state, value })
    onChange && onChange({detail: {value, ...rest}})
  }

  return (
    <SelectContext.Provider value={state}>
      {children}
    </SelectContext.Provider>
  )
}