import { useEffect, useRef, useState } from 'react'

export default function Dropdown({
  overlay,
  children,
  placement = 'left',
  onOpenChange = () => {},
  className,
  openOnHover,
  open: initialOpen = false
}) {

  const [open, setOpen] = useState(initialOpen)
  useEffect(() => setOpen(initialOpen), [initialOpen])

  // set a reference to the dropdown so we can attach listeners to it
  const dropdownRef = useRef(null)
  
  // set timers that persist between renders
  const mouseoutTimeout = useRef()
  const eventTimeout = useRef(null)

  const updateOpen = (value = false) => {
    if(eventTimeout.current) return
    setOpen(value)
    onOpenChange(value)
  }

  const handleMouseEnter = e => {
    clearTimeout(mouseoutTimeout.current) // prevent closing
    openOnHover && updateOpen(true)
  }
  
  const handleMouseLeave = e => {
    // close only if the user has left the dropdown for 150ms
    mouseoutTimeout.current = setTimeout(updateOpen, 150)
  }

  const setListeners = (target, action) => {
    target[action]('mouseenter', handleMouseEnter)
    target[action]('mouseleave', handleMouseLeave)
  }

  useEffect(() => {
    const dropdownEl = dropdownRef.current
    setListeners(dropdownEl, 'addEventListener')
    return () => setListeners(dropdownEl, 'removeEventListener')
  }, [])

  useEffect(() => {
    eventTimeout.current = setTimeout(() => {
      clearTimeout(eventTimeout.current)
      eventTimeout.current = null
    }, 150)
  }, [open]);

  const toggle = () => updateOpen(!open)

  if(typeof children == 'function') {
    return (
      <div ref={dropdownRef}>
        {children(open, toggle)}
      </div>
    )
  }

  return (
    <div
      className={`relative ${className}`}
      ref={dropdownRef}
    >
      <span onClick={toggle}>
        {children}
      </span>
      {open && (
        <div
          className="absolute z-20"
          style={{
            [placement]: 0
          }}
        >
          {overlay}
        </div>
      )}
    </div>
  )
}