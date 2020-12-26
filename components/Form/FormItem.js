import FormContext from './context'
import {
  useContext,
  useEffect,
  useState,
  cloneElement,
} from 'react'
import validateChildren from './validateChildren'
import PropTypes from 'prop-types'

export default function FormItem({children, name, label, required }) {
  const [invalid, setInvalid] = useState(false)
  const { updateValues, addItem, inputProps } = useContext(FormContext)
  
  // Add the validator for this item to FormContext
  useEffect(() => addItem({validator, name}), [])
  
  if(!validateChildren(children)) return null

  // listen onChange from children
  const onChange = e => {
    updateValues(name, e.target.value)
  }

  function validator(value) {
    if(required && !value) {
      setInvalid(true)
      throw new Error('INVALID')
    }
  }

  return cloneElement(children, { onChange, invalid, label, ...inputProps })
}

FormItem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool
}