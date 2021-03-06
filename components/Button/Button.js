import PropTypes from 'prop-types'

const typeClasses = {
  primary: 'bg-orange text-white',
  blue: 'bg-blue text-white',
  default: 'bg-white text-primary',
  text: '',
  outline: 'border-2 border-blue'
}
const defaultType = 'primary'

const sizeClasses = {
  small: 'py-1 px-2 text-sm',
  middle: 'py-1 px-3',
  large: 'py-1 px-4 text-2xl'
}
const defaultSize = 'middle'

export default function Button({
  type = defaultType,
  children,
  onClick,
  className,
  htmlType,
  size = defaultSize,
  disabled,
  ...props
}) {

  const typeClass = typeClasses[type] || defaultType
  const sizeClass = sizeClasses[size] || defaultSize

  return (
    <button
      className={`button-base disabled: ${sizeClass} ${typeClass} ${className}`}
      onClick={onClick}
      type={htmlType}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(Object.keys(typeClasses)),
  size: PropTypes.oneOf(Object.keys(sizeClasses)),
  htmlType: PropTypes.string,
  onClick: PropTypes.func
}