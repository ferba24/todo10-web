import { useContext } from 'react'
import RadioContext from './context'
import Card from '../Card'
import { motion } from 'framer-motion'

const RadioCircle = ({checked, className, ...props}) => (
  <div
    className={`border-2 ${checked ? 'border-white' : 'border-gray-300'} rounded-full w-5 h-5 flex justify-center items-center ${className}`}
    {...props}
  >
    <motion.div
      className={`w-3 h-3 ${checked ? 'bg-white' : 'bg-gray-300'} rounded-full`}
      initial={{ scale: 0 }}
      animate={{ scale: checked ? 1 : 0}}
    />
  </div>
)

export default function RadioCard({children, value, className, ...props}) {

  const { value: contextValue, setValue } = useContext(RadioContext)
  const checked = value == contextValue

  return (
    <motion.div
      animate={{ scale: checked ? 1.05 : 1 }}
      transition={{
        type: 'tween',
        ease: [.07,.79,.45,1],
        duration: 0.3
      }}
      className={className}
    >
      <Card
        className={`cursor-pointer ${checked ? 'bg-orange text-white' : 'bg-white'}`}
        shadowOnHover
        onClick={() => setValue(value)}
        {...props}
      >
        <RadioCircle
          className="absolute right-3 top-3 z-10"
          checked={checked}
        />
        <div>
          {children}
        </div>
      </Card>
    </motion.div>
  )
}