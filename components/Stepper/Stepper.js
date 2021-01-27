import Step from './Step'
import { useRef, useState } from 'react'
import Result from '../Result'
import { AnimatePresence, motion } from 'framer-motion'
import { variants } from '../../data/animations'
import useScrollHere from '../../lib/useScrollHere'

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
  const ref = useRef(null)
  const scrollHere = useScrollHere(ref, 100)

  const handleChange = values => {
    setValues(values)
    console.log('GLOBAL', values)
  }

  const scrollToTop = () => {
    if(document.body.offsetWidth > 767) {
      window.scrollTo({top: 0, behavior: 'smooth'})
    } else {
      scrollHere()
    }
  }

  const handleFinish = () => {
    scrollToTop()
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
    <div ref={ref}>
      <AnimatePresence exitBeforeEnter initial={false}>
        {!finished && firstStep}
        {finished && result}
      </AnimatePresence>
    </div>
  )
}