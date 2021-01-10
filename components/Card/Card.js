import Ribbon from './Ribbon'
import Content from './Content'
import Plan from './Plan'
import PropTypes from 'prop-types'

export default function Card({
  children,
  className,
  shadow,
  shadowOnHover,
  bordered = true,
  ribbon,
  ribbonStyle,
  style = {},
  ...props
}) {

  const ribbonOffset = typeof style.borderWidth != 'undefined' ? -style.borderWidth : bordered ? -1 : 0

  return (
    <div
      className={`relative p-3 sm:p-5 md:p-7 bg-white dark rounded-xl duration-300 transition-shadow ${shadowOnHover ? 'hover:shadow-xl' : ''} ${shadow ? 'shadow-xl' : ''} ${bordered ? 'border' : ''} border-gray-300 ${className}`}
      style={style}
      {...props}
    >
      {ribbon && (
        <Ribbon
          text={ribbon}
          offset={ribbonOffset}
          style={ribbonStyle}
        />
      )}
      {children}
    </div>
  )
}

Card.propTypes = {
  shadow: PropTypes.bool,
  shadowOnHover: PropTypes.bool,
  bordered: PropTypes.bool,
  className: PropTypes.string,
  ribbon: PropTypes.string,
  ribbonStyle: PropTypes.object,
  style: PropTypes.object
}

Card.Content = Content
Card.Plan = Plan