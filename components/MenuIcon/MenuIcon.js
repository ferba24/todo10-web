import PropTypes from 'prop-types';
import Line from './Line'

const defaultSize = 24

const sizesNames = {
  small: 14,
  middle: defaultSize,
  large: 30
}

const getFinalSize = size => {
  if(!isNaN(size)) return size
  return sizesNames[size] || defaultSize
}

export default function MenuIcon({
  open,
  size = 'large',
  color = '#37395B',
  className,
  ...props
}) {

  const finalSize = getFinalSize(size)

  return (
    <div
      className={`flex flex-wrap content-between cursor-pointer tap-highlight-transparent ${className}`}
      style={{width: finalSize, height: finalSize}}
      {...props}
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