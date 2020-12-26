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
          className="max-w-xs flex-1 h-full"
          ribbon={option.ribbon}
          {...props}
        >
          <RadioCard.Content {...option}/>
        </RadioCard>
      )
    case 'card':
      return (
        <Card className="max-w-xs flex-1 h-full" ribbon={option.ribbon}>
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
  onChange = () => {}
}) {

  const [nextStep, setNextStep] = useState(null)
  const [currentValue, setCurrentValue] = useState(undefined)

  const handleChange = e => {
    const { value, selectedIndex } = e.target
    setNextStep(options[selectedIndex].nextStep)
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
      className="my-10 max-w-4xl mx-auto"
    >
      <h3 className="text-center mb-4 text-xl">
        {title}
      </h3>

      {options && (
        <div className="flex space-x-6 justify-center">
          <Selector onChange={handleChange}>
            {options.map((option, i) => (
              <Option
                key={option.value}
                value={option.value}
                selectedIndex={i}
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