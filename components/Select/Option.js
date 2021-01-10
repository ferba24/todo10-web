import { useContext, useEffect } from 'react'
import SelectContext from './context'

function getChecked(optionValue, contextValue, multiple) {
  if(multiple) {
    return contextValue.includes(optionValue)
  } else {
    return optionValue == contextValue
  }
}

export default function Option({children, value: optionValue}) {

  const { addToOptions, updateValue, value } = useContext(SelectContext)

  useEffect(() => addToOptions(optionValue), [])

  if(typeof children != 'function') {
    console.error('The child of `<Option>` must be a function', children)
    return null
  }

  const props = {
    onClick: () => updateValue(optionValue),
    checked: getChecked(optionValue, value, Array.isArray(value))
  }

  return children(props)
}