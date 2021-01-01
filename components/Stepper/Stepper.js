import Step from './Step'
import { useState } from 'react'

export default function Stepper({initialStep}) {

  const [values, setValues] = useState({})

  const handleChange = values => {
    setValues(values)
    console.log('GLOBAL', values)
  }

  const handleFinish = () => {
    console.log("FINISHED", values)
  }
  
  if(!initialStep) return null

  return (
    <Step
      {...initialStep}
      key={initialStep.name}
      onChange={handleChange}
      onFinish={handleFinish}
    />
  )
}