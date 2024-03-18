export default function useScrollHere(ref, offset = 0) {
  return () => {
    if (!ref.current) return
    const { top } = ref.current.getBoundingClientRect()
    const targetTop = top - offset
    console.log(targetTop, top, offset)
    window.scrollTo({ top: targetTop, behavior: 'smooth' })
  }
}
