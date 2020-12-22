import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Arrow from '../Arrow'

const getVariant = expanded => (
  {
    height: expanded ? 'fit-content' : 0,
    opacity: expanded ? 1 : 0,
  }
)

export default function Expand({expanded: initialExpanded, title, children, ...props}) {
  const [expanded, setExpanded] = useState(initialExpanded)

  const initial = getVariant(false)
  const animate = getVariant(expanded)

  useEffect(() => {
    if(initialExpanded != expanded) {
      setExpanded(initialExpanded)
    }
  }, [initialExpanded])

  const content = (
    <motion.div
      initial={initial}
      animate={animate}
      className="overflow-hidden text-opacity-50 font-extralight p-2 text-sm mx-3.5"
    >
      {children}
    </motion.div>
  )

  return (
    <div {...props}>
      <div
        className="flex items-center cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
      >
        <Arrow size="small" direction={expanded ? 'down' : 'right'}/>
        <div className="ml-2 text-primary font-bold">
          {title}
        </div>
      </div>
      {content}
    </div>
  )
}