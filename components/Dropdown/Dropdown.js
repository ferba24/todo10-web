import { useEffect, useRef, useState } from 'react'

export default function Dropdown({
  overlay,
  children,
  placement = 'left',
  onOpenChange = () => {},
  open: initialOpen = false,
  className,
  openOnHover
}) {

  const [open, setOpen] = useState(initialOpen)
  useEffect(() => setOpen(initialOpen), [initialOpen])

  // set a reference to the dropdown so we can attach listeners to it
  const dropdownRef = useRef(null)
  
  // set a timer that persist between renders
  const mouseoutTimeout = useRef()

  const handleMouseEnter = e => {
    clearTimeout(mouseoutTimeout.current) // prevent closing
    if(!openOnHover) return
    setOpen(true)
    onOpenChange(true)
  }
  
  const handleMouseOut = e => {
    // close only if the user has left the dropdown for 150ms
    mouseoutTimeout.current = setTimeout(() => {
      setOpen(false)
      onOpenChange(false)
    }, 150)
  }

  const handleClick = e => {
    if(openOnHover) return
    setOpen(!open)
    onOpenChange(!open)
  }

  useEffect(() => {
    const dropdownEl = dropdownRef.current
    dropdownEl.addEventListener('mouseenter', handleMouseEnter)
    dropdownEl.addEventListener('mouseleave', handleMouseOut)
    
    // cleanup
    return () => {
      dropdownEl.removeEventListener('mouseenter', handleMouseEnter)
      dropdownEl.removeEventListener('mouseleave', handleMouseOut)
    }
  }, [])

  const toggle = () => {
    setOpen(!open)
  }

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
      <span onClick={handleClick}>
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