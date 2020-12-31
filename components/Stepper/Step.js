import { useState } from 'react'
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
  onFinish = () => {}
}) {

  const [nextStep, setNextStep] = useState(null)
  const [currentValue, setCurrentValue] = useState(undefined)

  const findSelectedOption = value => {
    for(const option of options) {
      if(option.value == value) return option
    }
  }

  const goToNextStep = (nextStep, value) => {
    nextStep && setNextStep(nextStep)
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="my-16 max-w-5xl mx-auto"
    >
      <div className="text-center mb-6">
        <StepIndicator
          number={currentStep}
          title={title}
          desc={desc}
        />
      </div>

      {options && (
        <div className="flex flex-wrap justify-center items-stretch">
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