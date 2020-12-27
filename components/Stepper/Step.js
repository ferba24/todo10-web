import { useState } from 'react'
import RadioCard from '../RadioCard'
import ChipSelector from '../ChipSelector'
import Card from '../../components/Card'
import { motion } from 'framer-motion'
import Fragment from '../../components/Fragment'

const getOptionChild = (type, option) => {
  switch(type) {
    case 'select':
      return option.label
    case 'chip':
      return props => (
        <ChipSelector.Chip
          className="w-60"
          {...props}
        >
          <ChipSelector.MiniContent {...option}/>
        </ChipSelector.Chip>
      )
    case 'radioCard':
      return props => (
        <RadioCard
          className="flex-1 min-w-min"
          ribbon={option.ribbon}
          {...props}
        >
          <RadioCard.Content {...option}/>
        </RadioCard>
      )
    case 'card':
      return (
        <Card className="max-w-xs flex-1" ribbon={option.ribbon}>
          <div>{option.title}</div>
          <div>{option.price}</div>
        </Card>
      )
  }
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}




export default function Step({
  name,
  title,
  options,
  type,
  currentStep = 1,
  selector: Selector = Fragment,
  option: Option = Fragment,
  onChange = () => {},
  multiple,
  nextStep: uniqueNextStep
}) {

  const [nextStep, setNextStep] = useState(null)
  const [currentValue, setCurrentValue] = useState(undefined)

  const findSelectedOption = value => {
    for(const option of options) {
      if(option.value == value) return option
    }
  }

  const handleChange = e => {
    const { value } = e.target
    const option = findSelectedOption(value)
    const nextStep = multiple ? !!value.length && uniqueNextStep : option.nextStep
    setNextStep(nextStep)
    setCurrentValue(value)
    onChange({[name]: value})
  }

  const handleChildChange = childValueObj => {
    onChange({[name]: currentValue, ...childValueObj})
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="my-10 max-w-5xl mx-auto"
    >
      <h3 className="text-center mb-4 text-xl">
        {title}
      </h3>

      {options && (
        <div className="flex flex-wrap space-x-6 justify-center items-center">
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

      {nextStep && (
        <Step
          {...nextStep}
          currentStep={currentStep + 1}
          key={nextStep.name}
          onChange={handleChildChange}
        />
      )}
    </motion.div>
  )
}