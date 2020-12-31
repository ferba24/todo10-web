import { useRef } from 'react'
import FormContext from './context'
import PropTypes from 'prop-types'
import FormItem from './FormItem'

export default function Form({
  children,
  onValuesChange = () => {},
  onFinish = () => {},
  ...rest
}) {

  const valuesRef = useRef({})
  const itemsRef = useRef([])

  const currentContext = {
    updateValues,
    addItem: item => itemsRef.current.push(item),
  }

  function updateValues(key, value) {
    valuesRef.current[key] = value
    onValuesChange(valuesRef.current)
  }

  const handleSubmit = e => {
    e.preventDefault()
    try {
      validate()
      onFinish(valuesRef.current)
    } catch(err) {
      console.error('Error en el formulario', err)
    }
  }

  function validate() {
    for(const item of itemsRef.current) {
      const {validator, name} = item
      validator(valuesRef.current[name])
    }
  }

  return (
    <FormContext.Provider value={currentContext}>
      <form onSubmit={handleSubmit} {...rest}>
        {children}
      </form>
    </FormContext.Provider>
  )
}

Form.propTypes = {
  onValuesChange: PropTypes.func,
  onFinish: PropTypes.func,
}

Form.Item = FormItem