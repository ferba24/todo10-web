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
      animate={{
        scale: checked ? 1 : 0
      }}
    />
  </div>
)

export default function RadioCard({children, value, checked, className, ...props}) {
  return (
    <motion.div
      animate={{
        scale: checked ? 1.06 : 1,
      }}
      transition={{
        type: 'tween',
        ease: [.07,.79,.45,1],
        duration: 0.3
      }}
      className={className}
    >
      <Card
        className={`cursor-pointer overflow-hidden ${checked ? 'bg-orange' : 'bg-white'}`}
        shadowOnHover
        {...props}
      >
        <RadioCircle
          className="absolute right-3 top-3 z-10"
          checked={checked}
        />
        <motion.div
          className="relative z-10"
          animate={{color: checked ? 'white' : 'inherit'}}
        >
          {children}
        </motion.div>
      </Card>
    </motion.div>
  )
}