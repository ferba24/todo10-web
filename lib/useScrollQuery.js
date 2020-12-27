import { useEffect, useState } from 'react'

/* Made by Lucas Said */

export default function useScrollQuery(breakPoint, target = document.body, scrollProp = 'scrollTop') {

  // match is true when user scrolls and cross the breakPoint
  const [match, setMatch] = useState(false)

  const handleScroll = e => {
    const scrollTop = target[scrollProp]
    if(scrollTop > breakPoint && !match) {
      setMatch(true)
    }
    if(scrollTop <= breakPoint && match) {
      setMatch(false)
    }
  }

  useEffect(() => {
    target.addEventListener('scroll', handleScroll)
    // cleanup
    return () => target.removeEventListener('scroll', handleScroll)
  }, [match])

  return match
} 