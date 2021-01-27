import Step from './Step'
import { useRef, useState } from 'react'
import useScrollHere from '../../lib/useScrollHere'
import WithSend from '../ContactForm/WithSend'

export default function Stepper({initialStep}) {

  const [values, setValues] = useState({})
  const ref = useRef(null)
  const scrollHere = useScrollHere(ref, 150)

  const handleFinish = async send => {
    await send(values)
    scrollHere()
  }
  
  if(!initialStep) return null

  return (
    <div ref={ref}>
      <WithSend>
        {({send, sending}) => (
          <Step
            {...initialStep}
            key={initialStep.name}
            onChange={values => setValues(values)}
            onFinish={() => handleFinish(send)}
            sending={sending}
          />
        )}
      </WithSend>
    </div>
  )
}