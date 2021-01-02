import { motion } from 'framer-motion'

const transition = {
  type: 'tween',
  duration: 0.4,
}

const Waves = ({scrolled}) => (
  <motion.img
    className="absolute -z-0 -top-10 w-full"
    style={{minHeight: 160}}
    animate={{
      y: scrolled ? -120 : 0,
      opacity: scrolled ? 0 : 1,
    }}
    transition={transition}
    src="/images/waves.svg"
  />
)

const Menu = ({routes = []}) => (
  <div className="w-6/12 hidden md:flex items-center font-semibold justify-between">
    {routes.map(route => (
      <div key={route.path}>
        {route.label}
      </div>
    ))}
  </div>
)

export default function Navbar({routes, scrolled}) {

  return (
    <div className="fixed top-0 left-0 w-full z-20">
      <div className={`relative z-10 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-4' : 'py-6'}`}>
        <div className="flex items-center justify-between container px-3 lg:p-0 ">
          <img src='/logo.svg' className="h-8 md:h-12"/>
          <Menu routes={routes}/>
        </div>
      </div>
      <Waves scrolled={scrolled}/>
    </div>
  )
}