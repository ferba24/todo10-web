import Step from './Step'

export default function Stepper({initialStep}) {

  const handleChange = value => {
    console.log('GLOBAL', value)
  }
  
  if(!initialStep) return null

  return (
    <div>
      <Step
        {...initialStep}
        key={initialStep.name}
        onChange={handleChange}
      />
    </div>
  )
}