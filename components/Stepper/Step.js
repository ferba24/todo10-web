import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import getOptionChild from './getOptionChild'
import StepIndicator from './StepIndicator'
import ContactForm from '../ContactForm'
import useScrollHere from '../../lib/useScrollHere'
import mapTypesSelectors from './mapTypesSelectors'
import Fragment from '../Fragment'

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function Step({
  name,
  title,
  desc,
  options,
  type,
  currentStep = 1,
  onChange = () => {},
  multiple,
  nextStep: uniqueNextStep,
  final,
  onFinish = () => {},
  className = 'flex flex-wrap justify-center items-stretch',
  sending
}) {

  const [nextStep, setNextStep] = useState(null)
  const currentValueRef = useRef(undefined)
  const indicatorRef = useRef(null)

  const {
    selector: Selector = Fragment,
    option: Option = Fragment
  } = mapTypesSelectors[type] || {}

  const scrollHere = useScrollHere(indicatorRef, 150)

  useEffect(() => {
    if(currentStep == 1 || document.body.offsetWidth > 767) return
    setTimeout(scrollHere, 300)
  }, [scrollHere])

  const goToNextStep = (nextStep, value) => {
    setNextStep(nextStep)
    currentValueRef.current = value
    onChange({[name]: value})
    if(final) onFinish(value)
  }

  const handleChange = e => {
    const { value } = e.target
    const option = options.find(({value: optionValue}) => optionValue == value)
    const nextStep = multiple ? !!value.length && uniqueNextStep : option.nextStep
    goToNextStep(nextStep, value)
  }

  const handleChildChange = childValueObj => {
    onChange({[name]: currentValueRef.current, ...childValueObj})
  }

  const indicator = (
    <div
      className="text-center mb-6"
      ref={indicatorRef}
    >
      <StepIndicator
        number={currentStep}
        title={title}
        desc={desc}
      />
    </div>
  )

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{type: 'spring', bounce: 0.5}}
      className="my-16"
    >
      {indicator}

      {options && (
        <div className={className}>
          <Selector
            onChange={handleChange}
            multiple={multiple}
          >
            {options.map(option => (
              <Option
                key={option.value}
                value={option.value}
              >
                {getOptionChild(type, option)}
              </Option>
            ))}
          </Selector>
        </div>
      )}

      {type == 'contactForm' && (
        <ContactForm
          onFinish={values => goToNextStep(null, values)}
          sending={sending}
        />
      )}

      {nextStep && (
        <Step
          {...nextStep}
          currentStep={currentStep + 1}
          key={nextStep.name}
          onChange={handleChildChange}
          onFinish={onFinish}
          sending={sending}
        />
      )}
    </motion.div>
  )
}