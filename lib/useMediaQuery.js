import { useEffect, useState } from 'react'

/* Made by Lucas Said */

export default function useMediaQuery(breakPoint) {

  // match is true when user scrolls and cross the breakPoint
  const [match, setMatch] = useState(false)

  const handleResize = e => {
    const { innerWidth } = window
    if(innerWidth < breakPoint && !match) {
      setMatch(true)
    }
    if(innerWidth >= breakPoint && match) {
      setMatch(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    // cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [match])

  return match
} 