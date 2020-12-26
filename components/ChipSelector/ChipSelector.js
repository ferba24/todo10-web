import { useState, useEffect } from 'react'
import Select from '../Select'
import { motion } from 'framer-motion'

export default function ChipSelector({
  defaultValue,
  children,
  onChange
}) {

  const [value, setValue] = useState(defaultValue)
  const [values, setValues] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const index = values.indexOf(value)
    const newSelectedIndex = index != -1 ? index : 0
    setSelectedIndex(newSelectedIndex)
  }, [values, value]);

  const handleChange = e => {
    const { value } = e.detail
    setValue(value)
    onChange && onChange({detail: {value}})
  }

  const x = selectedIndex * 100 + '%'
  const width = 100 / values.length + '%'

  return (
    <div className="p-2 bg-gray-200 rounded-lg overflow-hidden">
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

export const Chip = ({children, checked, ...props}) => (
  <div
    className={`flex-1 relative z-10`}
    style={{filter: `grayscale(${checked ? 0 : 60}%)`}}
    {...props}
  >
    {children}
  </div>
)