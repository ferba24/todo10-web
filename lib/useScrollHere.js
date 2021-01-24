import { useEffect, useState } from 'react' 

export default function useScrollHere(ref, offset = 0) {

  const [scrollHere, setScrollHere] = useState(() => () => {})

  useEffect(() => {
    if(!ref.current) return
    const { top } = ref.current.getBoundingClientRect()
    const targetTop = window.scrollY + top - offset
    const scrollHere = () => {
      window.scrollTo({top: targetTop , behavior: 'smooth'})
    }
    setScrollHere(() => scrollHere)
  }, [ref]);

  return scrollHere
}