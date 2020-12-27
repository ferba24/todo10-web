import useScrollQuery from '../../lib/useScrollQuery'
import { motion } from 'framer-motion'
import wavesImage from './waves.svg'

const transition = {
  type: 'tween',
  duration: 0.4,
}

export default function Navbar({

}) {

  const scrolled = useScrollQuery(100, window, 'scrollY')

  return (
    <div className="fixed top-0 left-0 w-full">
      <div className={`relative z-10 px-3 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-4' : 'py-8'}`}>
        hola
      </div>
      <motion.img
        className="absolute z-0 top-0"
        animate={{
          y: scrolled ? -50 : 0,
          opacity: scrolled ? 0 : 1,
        }}
        transition={transition}
        src={wavesImage}
      />
    </div>
  )
}