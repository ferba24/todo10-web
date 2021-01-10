import { useState } from 'react'
import Select from '../Select'
import { motion } from 'framer-motion'
import Chip from './Chip'
import MiniContent from './MiniContent'

export default function ChipSelector({
  defaultValue,
  children,
  onChange = () => {},
  onSelectedIndexChange = () => {},
  className,
  ...rest
}) {

  const [options, setOptions] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1.1)

  const handleSelectedIndexChange = index =>{
    onSelectedIndexChange(index)
    setSelectedIndex(index)
  }

  const x = selectedIndex * 100 + '%'
  const width = 100 / options.length + '%'

  return (
    <div
      className={`p-2 bg-gray-200 rounded-lg overflow-hidden ${className}`}
      {...rest}
    >
      <div className="relative flex">
        <Select
          defaultValue={defaultValue}
          onChange={onChange}
          onSelectedIndexChange={handleSelectedIndexChange}
          onOptionsChange={setOptions}
        >
          {children}
        </Select>
        <motion.div
          className="absolute h-full bg-white rounded-lg"
          style={{ width }}
          initial={{ x: '-110%' }}
          animate={{ x }}
        />
      </div>
    </div>
  )
}

ChipSelector.Chip = Chip
ChipSelector.MiniContent = MiniContent
ChipSelector.Option = Select.Option