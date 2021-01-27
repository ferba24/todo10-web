const Chip = ({children, checked, className, ...props}) => (
  <div
    className={`flex-1 relative z-10 tap-highlight-transparent ${className}`}
    style={{filter: `grayscale(${checked ? 0 : 60}%)`}}
    {...props}
  >
    {children}
  </div>
)
export default Chip