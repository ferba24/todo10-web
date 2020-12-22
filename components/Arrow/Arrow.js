import { motion } from 'framer-motion'
import arrowIcon from './arrow-right.svg'
import PropTypes from 'prop-types';

const defaultSize = 24

const getFinalSize = size => {
  if(!isNaN(size)) return size
  switch (size) {
    case 'small':
      return 14
    case 'middle':
      return defaultSize
    case 'large':
      return 34
    default:
      return defaultSize
  }
}

const getRotation = direction => {
  switch (direction) {
    case 'up':
      return -90
    case 'rigth':
      return 0
    case 'down':
      return 90
    case 'left':
      return 180
    default:
      return 0
  }
}

export default function Arrow({size = 'middle', direction = 'right'}) {
  const finalSize = getFinalSize(size)
  const rotate = getRotation(direction)

  return (
    <motion.div
      animate={{rotate}}
      style={{height: finalSize, width: finalSize}}
    >
      <img
        className="h-full mx-auto"
        src={arrowIcon}
      />
    </motion.div>
  )
}

export const directions = ['right', 'down', 'left', 'up']
export const sizes = ['small', 'middle', 'large']

Arrow.propTypes = {
  /**
   * Size of the arrow
   */
  size: PropTypes.oneOf(sizes),
  /**
   * Direction
   */
  direction: PropTypes.oneOf(directions)
}