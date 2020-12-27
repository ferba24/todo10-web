import { useContext, useEffect } from 'react'
import SelectContext from './context'

export default function Option({children, value: optionValue, ...rest}) {

  const {
    value: contextValue,
    setValue,
    addToOptions,
    multiple
  } = useContext(SelectContext)

  useEffect(() => addToOptions(optionValue), [])

  if(typeof children != 'function') {
    console.error('The child of `<Option>` must be a function', children)
    return null
  }

  const checked = getChecked(optionValue, contextValue, multiple)

  const props = {
    onClick: () => setValue(optionValue, rest),
    checked
  }

  return children(props)
}

function getChecked(optionValue, contextValue, multiple) {
  if(multiple) {
    return contextValue.includes(optionValue)
  } else {
    return optionValue == contextValue
  }
}