import { useState } from 'react'
import RadioContext from './context'

export default function RadioGroup({children, initialValue, className, onChange = () => {}}) {

  const [state, setState] = useState({
    value: initialValue,
    setValue
  })

  function setValue(value) {
    setState({
      ...state,
      value
    })
    onChange({detail: {value}})
  }

  return (
    <div className={className}>
      <RadioContext.Provider value={state}>
        {children}
      </RadioContext.Provider>
    </div>
  )
}