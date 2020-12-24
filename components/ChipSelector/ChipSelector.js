import { useState } from 'react'
import { Select } from '../Select'
import { motion } from 'framer-motion'

export default function ChipSelector({
  defaultValue,
  defaultSelectedIndex = 0,
  children
}) {

  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex)

  const handleChange = e => {
    const { index } = e.detail
    setSelectedIndex(index)
  }

  const x = selectedIndex * 100 + '%'
  const width = 100 / children.length + '%'

  return (
    <div className="p-2 bg-gray-200 rounded-lg overflow-hidden">
      <div className="relative flex">
        <Select
          defaultValue={defaultValue}
          onChange={handleChange}
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