import FormContext from './context'
import {
  useContext,
  useEffect,
  useState,
  cloneElement,
} from 'react'
import validateChildren from './validateChildren'
import PropTypes from 'prop-types'

export default function FormItem({children, name, label, required, className = '', style }) {
  const [invalid, setInvalid] = useState(false)
  const { updateValues, addItem } = useContext(FormContext)
  
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

  const newInput = cloneElement(children, { onChange, invalid, label })

  return (
    <div
      className={`my-4 ${className}`}
      style={style}
    >
      {label && (
        <div className="mb-1 text-primary font-normal ml-3">
          {label}
        </div>
      )}
      {newInput}
    </div>
  )
}

FormItem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool
}