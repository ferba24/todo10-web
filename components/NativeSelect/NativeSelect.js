import { useState } from 'react'
import NativeOption from './NativeOption'
import Dropdown from '../Dropdown'
import Arrow from '../Arrow'
import Select from '../Select'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export default function NativeSelect({
  onChange = () => {},
  onSelectedIndexChange = () => {},
  children,
  placeholder = 'Select an option',
  className = 'w-full max-w-xs',
}) {

  const [currentValue, setCurrentValue] = useState(undefined)
  const [currentLabel, setCurrentLabel] = useState(undefined)
  const [open, setOpen] = useState(false)
  const arrowDirection = open ? 'down' : 'right'

  if(!children || typeof children == 'string') return null
  if(!Array.isArray(children)) children = [children]

  const handleChange = e => {
    setCurrentValue(e.target.value)
    setOpen(false)
    onChange(e)
  }

  const handleSelectedIndexChange = index => {
    setCurrentLabel(children[index].props.children)
    onSelectedIndexChange(index)
  }

  const trigger = (
    <div className="form-control flex cursor-pointer items-center justify-between">
      {currentLabel || currentValue ||  placeholder}
      <Arrow size="small" className="ml-2" direction={arrowDirection} />
    </div>
  )

  const overlay = (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="bg-gray-100 border border-gray-300 rounded-lg py-2 mt-2"
    >
      <Select
        onChange={handleChange}
        onSelectedIndexChange={handleSelectedIndexChange}
      >
        {children.map(child => (
          <Select.Option
            key={child.props.value}
            value={child.props.value}
          >
            {props => (
              <div {...props}>
                {child}
              </div>
            )}
          </Select.Option>
        ))}
      </Select>
    </motion.div>
  )

  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      overlay={overlay}
      placement="right"
      className={className}
    >
      {trigger}
    </Dropdown>
  )
}

NativeSelect.Option = NativeOption