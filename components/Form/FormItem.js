import FormContext from './context'
import {
  useContext,
  useEffect,
  useState,
  cloneElement,
} from 'react'
import validateChildren from './validateChildren'
import PropTypes from 'prop-types'

export default function FormItem({
  children,
  name,
  label,
  required,
  className = '',
  style,
  errorMessage = 'Campo requerido'
}) {
  const [invalid, setInvalid] = useState(false)
  const { updateValues, addValidator } = useContext(FormContext)

  function validator(value) {
    if(required && !value) {
      setInvalid(true)
      throw new Error('INVALID')
    }
  }

  // Add the validator for this item to FormContext
  useEffect(() => addValidator({ validator, name }), [])
  
  if(!validateChildren(children)) return null

  // listen onChange from children
  const onChange = e => {
    setInvalid(false)
    updateValues(name, e.target.value)
  }

  const newInput = cloneElement(children, { onChange })

  const renderedErrorMessage = (
    <div className="text-red-800 ml-3 mt-1">
      {errorMessage}
    </div>
  )

  return (
    <div
      className={`my-6 ${className}`}
      style={style}
    >
      {label && (
        <div className="mb-1 font-normal ml-3">
          {label}
        </div>
      )}
      {newInput}
      {invalid && renderedErrorMessage}
    </div>
  )
}

FormItem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool
}