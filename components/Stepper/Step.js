import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Fragment from '../../components/Fragment'
import getOptionChild from './getOptionChild'
import StepIndicator from './StepIndicator'
import ContactForm from '../../containers/ContactForm'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Step({
  name,
  title,
  desc,
  options,
  type,
  currentStep = 1,
  selector: Selector = Fragment,
  option: Option = Fragment,
  onChange = () => {},
  multiple,
  nextStep: uniqueNextStep,
  final,
  onFinish = () => {},
  className = 'flex flex-wrap justify-center items-stretch'
}) {

  const [nextStep, setNextStep] = useState(null)
  const [currentValue, setCurrentValue] = useState(undefined)
  const indicatorRef = useRef(null)

  useEffect(() => {
    if(currentStep == 1 || document.body.offsetWidth > 767) return
    const { top } = indicatorRef.current.getBoundingClientRect()
    setTimeout(() => {
      window.scrollTo({top: window.scrollY + top - 150 , behavior: 'smooth'})
    }, 300)
  }, [indicatorRef])

  const findSelectedOption = value => {
    for(const option of options) {
      if(option.value == value) return option
    }
  }

  const goToNextStep = (nextStep, value) => {
    setNextStep(nextStep)
    setCurrentValue(value)
    onChange({[name]: value})
    if(final) onFinish()
  }

  const handleChange = e => {
    const { value } = e.target
    const option = findSelectedOption(value)
    const nextStep = multiple ? !!value.length && uniqueNextStep : option.nextStep
    goToNextStep(nextStep, value)
  }

  const handleChildChange = childValueObj => {
    onChange({[name]: currentValue, ...childValueObj})
  }

  const handleFormFinish = values => {
    goToNextStep(uniqueNextStep, values)
  }

  const handleFormChange = values => {
    setCurrentValue(values)
    onChange({[name]: values})
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
          onFinish={handleFormFinish}
          onValuesChange={handleFormChange}
        />
      )}

      {nextStep && (
        <Step
          {...nextStep}
          currentStep={currentStep + 1}
          key={nextStep.name}
          onChange={handleChildChange}
          onFinish={onFinish}
        />
      )}
    </motion.div>
  )
}