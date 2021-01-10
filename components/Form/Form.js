import { useCallback, useState, useMemo } from 'react'
import FormContext from './context'
import PropTypes from 'prop-types'
import FormItem from './FormItem'

export default function Form({
  children,
  onValuesChange = () => {},
  onFinish = () => {},
  ...rest
}) {

  const [values, setValues] = useState({})
  const [validators, setValidators] = useState([])

  const updateValues = useCallback((key, value) => {
    setValues(prevValues => {
      const newValues = {...prevValues, [key]: value}
      onValuesChange(newValues)
      return newValues
    })
  }, [])

  const addValidator = useCallback(validator => {
    setValidators(prevValidators => [...prevValidators, validator])
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    try {
      validate()
      onFinish(values)
    } catch(err) {
      console.error('Error en el formulario', err)
    }
  }

  function validate() {
    for(const item of validators) {
      const { validator, name } = item
      validator(values[name])
    }
  }

  const api = useMemo(() => ({
    updateValues,
    addValidator
  }), [])

  return (
    <FormContext.Provider value={api}>
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