import SelectContext from './context'
import { useState, useCallback, useMemo, useEffect } from 'react'
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

  const initialValue = defaultValue ? defaultValue : multiple ? [] : undefined

  const [options, setOptions] = useState([])
  const [value, setValue] = useState(initialValue)

  const addToOptions = useCallback(option => {
    setOptions(prevOptions => {
      const newOptions = [...prevOptions, option] 
      onOptionsChange(newOptions)
      return newOptions
    })
  }, [])

  const updateValue = useCallback(payloadValue => {
    setValue(prevValue => {
      let newValue = multiple ? [...prevValue] : {...prevValue}
      if(multiple) {
        const index = prevValue.indexOf(payloadValue)
        if(index != -1) {
          newValue.splice(index, 1)
        } else {
          newValue.push(payloadValue)
        }
      } else {
        newValue = payloadValue
      }
      onChange({ target: { value: newValue }})
      return newValue
    })
  }, [])

  useEffect(() => {
    if(multiple || !value) return
    onSelectedIndexChange(options.indexOf(value))
  }, [value, options])

  const api = useMemo(() => (
    { updateValue, addToOptions, value }
  ), [value])

  return (
    <SelectContext.Provider value={api}>
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