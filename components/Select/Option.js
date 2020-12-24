import { useContext } from 'react'
import SelectContext from './context'

export default function Option({children, value: optionValue, ...rest}) {

  const { value: contextValue, setValue } = useContext(SelectContext)

  if(typeof children != 'function') {
    console.error('The child of `<Option>` must be a function')
    return null
  }

  const props = {
    onClick: () => setValue(optionValue, rest),
    checked: optionValue == contextValue
  }

  return children(props)
}