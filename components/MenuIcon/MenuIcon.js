import { motion } from 'framer-motion'
import PropTypes from 'prop-types';

const Line = ({color, size, ...props }) => (
  <motion.div {...props}>
    <svg
      width={size}
      height={size / 8}
      viewBox="0 0 32 4"
      fill="none"
    >
      <rect
        width="32"
        height="4"
        rx="2"
        fill={color}
      />
    </svg>
  </motion.div>
)

const defaultSize = 24

const sizesNames = {
  small: 14,
  middle: defaultSize,
  large: 34
}

const getFinalSize = size => {
  if(!isNaN(size)) return size
  return sizesNames[size] || defaultSize
}

export default function MenuIcon({ open, size = 'middle', color = '#37395B' }) {

  const finalSize = getFinalSize(size)

  return (
    <div
      className="flex flex-wrap content-between"
      style={{width: finalSize, height: finalSize}}
    >
      <Line
        size={finalSize}
        color={color}
        className="origin-left"
        animate={{
          rotate: open ? 45 : 0,
          y: open ? finalSize / 10 : 0
        }}
      />
      <Line
        size={finalSize}
        color={color}
        animate={{
          scaleX: open ? 0.1 : 1,
          x: open ? - finalSize / 5 : 0,
        }}
        transition={{ type: 'spring', duration: 0.4 }}
      />
      <Line
        size={finalSize}
        color={color}
        className="origin-left"
        animate={{
          rotate: open ? -45 : 0,
          y: open ? -finalSize / 10 : 0
        }}
      />
    </div>
  )
}

export const sizes = Object.keys(sizesNames)

MenuIcon.propTypes = {
  open: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  color: PropTypes.string
}