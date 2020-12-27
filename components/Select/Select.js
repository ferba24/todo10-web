import SelectContext from './context'
import { useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import Option from './Option'

export default function Select({
  children,
  onChange = () => {},
  onOptionsChange = () => {},
  onSelectedIndexChange = () => {},
  multiple,
  defaultValue,
}) {

  const initialValue = defaultValue || multiple ? [] : undefined
  const optionsRef = useRef([])
  const valueRef = useRef(initialValue)

  function addToOptions(value) {
    optionsRef.current.push(value)
    onOptionsChange(optionsRef.current)
  }

  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  function setValue(value, rest) {
    if(multiple) {
      const index = valueRef.current.indexOf(value)
      if(index != -1) {
        valueRef.current.splice(index, 1)
      } else {
        valueRef.current.push(value)
      }
    } else {
      valueRef.current = value
    }
    forceUpdate()
    onChange({target: {value: valueRef.current, ...rest}})
    !multiple && onSelectedIndexChange(optionsRef.current.indexOf(value))
  }

  const contextValue = {
    multiple,
    setValue,
    addToOptions,
    value: valueRef.current
  }

  return (
    <SelectContext.Provider value={contextValue}>
      {children}
    </SelectContext.Provider>
  )
}

Select.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  onChange: PropTypes.func,
  onOptionsChange: PropTypes.func,
  onSelectedIndexChange: PropTypes.func,
  multiple: PropTypes.bool
}

Select.Option = Option