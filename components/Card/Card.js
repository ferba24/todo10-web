import Ribbon from './Ribbon'
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
  return (
    <div
      className={`relative bg-white rounded-xl duration-300 transition-shadow ${shadowOnHover ? 'hover:shadow-xl' : ''} ${shadow ? 'shadow-xl' : ''} p-8 ${bordered ? 'border' : ''} border-gray-300 ${className}`}
      style={style}
      {...props}
    >
      {ribbon && (
        <Ribbon
          text={ribbon}
          offset={-style.borderWidth || bordered ? -1 : 0}
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

const Content = ({icon, title, desc}) => (
  <div className="text-center">
    <img className="mx-auto w-20" src={icon} />
    <div className="font-medium mt-4 mb-1">{title}</div>
    <div className="opacity-70">{desc}</div>
  </div>
)

Card.Content = Content