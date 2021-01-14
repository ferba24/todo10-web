import Step from './Step'
import { useState } from 'react'
import Result from '../Result'
import { AnimatePresence, motion } from 'framer-motion'
import { variants } from '../../data/animations'

const Animated = ({children}) => (
  <motion.div
    initial={variants.UP.hidden}
    animate={variants.UP.visible}
    exit={variants.UP.hidden}
  >
    {children}
  </motion.div>
)

export default function Stepper({initialStep}) {

  const [values, setValues] = useState({})
  const [finished, setFinished] = useState(false)

  const handleChange = values => {
    setValues(values)
    console.log('GLOBAL', values)
  }

  const handleFinish = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    setTimeout(() => {
      setFinished(true)
    }, 200)
  }
  
  if(!initialStep) return null

  const firstStep = (
    <Animated key="firstStep">
      <Step
        {...initialStep}
        key={initialStep.name}
        onChange={handleChange}
        onFinish={handleFinish}
      />
    </Animated>
  )

  const result = (
    <Animated key="result">
      <Result/>
    </Animated>
  )

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {!finished && firstStep}
        {finished && result}
      </AnimatePresence>
    </>
  )
}