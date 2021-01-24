import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Arrow from '../Arrow'
import PropTypes from 'prop-types'

const getVariant = expanded => (
  {
    height: expanded ? 'fit-content' : 0,
    opacity: expanded ? 1 : 0,
  }
)

export default function Expand({
  expanded: initialExpanded,
  title,
  children,
  arrowPosition = 'left',
  animated = true,
  ...props
}) {
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
      transition={{duration: animated ? 0.2 : 0}}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  )

  const arrowClassName = arrowPosition == 'left' ? 'mr-2' : 'ml-2'

  const arrow = (
    <Arrow
      size="small"
      direction={expanded ? 'down' : 'right'}
      className={arrowClassName}
    />
  )

  return (
    <div {...props}>
      <div
        className="flex items-center cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
      >
        {arrowPosition == 'left' && arrow}
        {title}
        {arrowPosition == 'right' && arrow}
      </div>
      {content}
    </div>
  )
}

Arrow.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  expanded: PropTypes.bool,
  arrowPosition: PropTypes.oneOf(['left', 'right'])
}