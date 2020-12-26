import { useState, useEffect } from 'react'
import Select from '../Select'
import { motion } from 'framer-motion'
import Chip from './Chip'
import MiniContent from './MiniContent'

export default function ChipSelector({
  defaultValue,
  children,
  onChange,
  className,
  ...rest
}) {

  const [value, setValue] = useState(defaultValue)
  const [values, setValues] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1.1)

  useEffect(() => {
    let index = values.indexOf(value)
    if(index == -1) index = -1.1
    setSelectedIndex(index)
  }, [values, value]);

  const handleChange = e => {
    const { value } = e.target
    setValue(value)
    onChange && onChange(e)
  }

  const x = selectedIndex * 100 + '%'
  const width = 100 / values.length + '%'

  return (
    <div
      className={`p-2 bg-gray-200 rounded-lg overflow-hidden ${className}`}
      {...rest}
    >
      <div className="relative flex">
        <Select
          defaultValue={defaultValue}
          onChange={handleChange}
          onValuesChange={setValues}
        >
          {children}
        </Select>
        <motion.div
          className="absolute h-full bg-white rounded-lg"
          style={{ width }}
          animate={{ x }}
        />
      </div>
    </div>
  )
}

ChipSelector.Chip = Chip
ChipSelector.MiniContent = MiniContent
ChipSelector.Option = Select.Option