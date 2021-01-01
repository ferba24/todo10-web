import { motion } from 'framer-motion'
import useScrollQuery from '../../lib/useScrollQuery'

const transition = {
  type: 'tween',
  duration: 0.4,
}

const Waves = ({scrolled}) => (
  <motion.img
    className="absolute -z-0 top-0 w-full"
    style={{minHeight: 120}}
    animate={{
      y: scrolled ? -50 : 0,
      opacity: scrolled ? 0 : 1,
    }}
    transition={transition}
    src="/images/waves.svg"
  />
)

const Menu = ({routes = []}) => (
  <div className="w-7/12 hidden md:flex items-center font-semibold">
    {routes.map(route => (
      <div key={route.path} className="flex-1">
        {route.label}
      </div>
    ))}
  </div>
)

export default function Navbar({routes}) {

  const scrolled = typeof window != 'undefined' && useScrollQuery(50, window, 'scrollY')

  return (
    <div className="fixed top-0 left-0 w-full z-20">
      <div className={`relative z-10 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-4' : 'py-6'}`}>
        <div className="flex items-center justify-between max-w-4xl mx-auto px-3 lg:p-0 ">
          <img src='/logo.svg' className="h-8 md:h-12"/>
          <Menu routes={routes}/>
        </div>
      </div>
      <Waves scrolled={scrolled}/>
    </div>
  )
}