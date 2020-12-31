import useScrollQuery from '../../lib/useScrollQuery'
import { motion } from 'framer-motion'
import wavesImage from './waves.svg'
import logo from '../../public/logo.svg'
import routes from '../../data/routes'

const transition = {
  type: 'tween',
  duration: 0.4,
}

const Waves = ({scrolled}) => (
  <motion.img
    className="absolute z-0 top-0 w-full"
    style={{minHeight: 120}}
    animate={{
      y: scrolled ? -50 : 0,
      opacity: scrolled ? 0 : 1,
    }}
    transition={transition}
    src={wavesImage}
  />
)

const Menu = ({routes = []}) => (
  <div className="w-7/12 hidden md:flex items-center font-semibold">
    {routes.map(route => (
      <div className="flex-1">
        {route.label}
      </div>
    ))}
  </div>
)

export default function Navbar({routes}) {

  const scrolled = useScrollQuery(100, window, 'scrollY')
  console.log(routes)
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className={`relative z-10 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-4' : 'py-6'}`}>
        <div className="flex items-center justify-between max-w-4xl mx-auto px-3 lg:p-0 ">
          <img src={logo} className="h-10 md:h-12"/>
          <Menu routes={routes}/>
        </div>
      </div>
      <Waves scrolled={scrolled}/>
    </div>
  )
}