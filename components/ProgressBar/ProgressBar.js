import { motion } from 'framer-motion'

export default function ProgressBar({
  value = 0,
  progressColor = 'orange',
  transition = {},
  labelPrefix,
  labelSuffix,
  className = '',
  max = 100,
  ...props
}) {

  const percentage = (value / max) * 100

  return (
    <div
      className={`flex items-center ${className}`}
      {...props}
    >
      <motion.div
        className="h-8"
        style={{backgroundColor: progressColor}}
        initial={{ width: '0%' }}
        animate={{ width: `calc(${percentage}% - 50px)` }}
        transition={transition}
      />
      <div className="ml-3 flex-shrink-0">
        {labelPrefix}
        {value}
        {labelSuffix}
      </div>
    </div>
  )
}