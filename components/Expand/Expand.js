import { useState } from 'react'
import { motion } from 'framer-motion'
import Arrow from '../Arrow'

export default function Expand({expanded: initialExpanded, title, children, ...props}) {
  const [expanded, setExpanded] = useState(initialExpanded)

  const content = (
    <motion.div
      animate={{
        height: expanded ? 'fit-content' : 0,
        opacity: expanded ? 1 : 0,
      }}
      className="overflow-hidden text-opacity-50 font-extralight p-2 text-sm mx-3.5"
    >
      {children}
    </motion.div>
  )

  return (
    <div {...props}>
      <div
        className="flex items-center"
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