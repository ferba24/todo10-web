import { motion } from 'framer-motion'
import PropTypes from 'prop-types';

const defaultSize = 24

const sizesNames = {
  small: 16,
  middle: defaultSize,
  large: 34
}

const getFinalSize = size => {
  if(!isNaN(size)) return size
  return sizesNames[size] || defaultSize
}

const rotations = {
  up: -90,
  right: 0,
  down: 90,
  left: 180
}

export default function Arrow({size = 'middle', direction = 'right', ...rest}) {
  const finalSize = getFinalSize(size)
  const rotate = rotations[direction] || 0

  return (
    <motion.div
      animate={{rotate}}
      style={{height: finalSize, width: finalSize}}
      {...rest}
    >
      <img
        className="h-full mx-auto"
        src="/icons/arrow-right.svg"
      />
    </motion.div>
  )
}

export const directions = ['right', 'down', 'left', 'up']
export const sizes = Object.keys(sizesNames)

Arrow.propTypes = {
  size: PropTypes.oneOf(sizes),
  direction: PropTypes.oneOf(directions)
}