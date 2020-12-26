import SelectContext from './context'
import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Option from './Option'

export default function Select({
  defaultValue,
  onChange,
  children,
  onValuesChange
}) {

  const valuesRef = useRef([])

  const [state, setState] = useState({
    value: defaultValue,
    setValue,
    addToValues
  })

  function addToValues(value) {
    valuesRef.current.push(value)
    onValuesChange && onValuesChange(valuesRef.current)
  }

  function setValue(value, rest) {
    setState({ ...state, value })
    onChange && onChange({target: {value, ...rest}})
  }

  return (
    <SelectContext.Provider value={state}>
      {children}
    </SelectContext.Provider>
  )
}

Select.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onValuesChange: PropTypes.func
}

Select.Option = Option