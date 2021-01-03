import { motion } from 'framer-motion'
import NavbarMenu from './NavbarMenu'
import Link from 'next/link'

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

export default function Navbar({routes, scrolled}) {
  return (
    <div className="fixed top-0 left-0 w-full z-20">
      <div className={`relative z-10 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-4' : 'py-6'}`}>
        <div className="flex items-center justify-between container px-3 lg:p-0 ">
          <Link href="/">
            <img src='/logo.svg' className="cursor-pointer h-8 md:h-12"/>
          </Link>
          <NavbarMenu routes={routes} scrolled={scrolled}/>
        </div>
      </div>
      <Waves scrolled={scrolled}/>
    </div>
  )
}