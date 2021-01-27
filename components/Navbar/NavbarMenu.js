import Dropdown from '../Dropdown'
import Arrow from '../Arrow'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

const triggerOpened = 'bg-white border-blue z-40'
const activeClass = 'text-orange underline'

const Trigger = (open, toggleOpen, label) => (
  <div
    className={`flex cursor-pointer border-3 border-transparent p-3 rounded-lg items-center ${open ? triggerOpened : ''}`}
    style={{borderBottom: 'none', borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
    onClick={() => {
      toggleOpen()
    }}
  >
    {label}
    <Arrow
      size="small"
      className="ml-2"
      direction={open ? 'down' : 'right'}
    />
  </div>
)

const variants = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

const SubItems = ({items, className = '', pathname}) => (
  <motion.div
    className={`bg-white absolute max-w-xl p-3 flex flex-wrap rounded-lg border-3 border-blue mt-2 ${className}`}
    initial="hidden"
    animate="visible"
    transition={{type: 'tween'}}
    variants={variants}
  >
    {items.map(route => (
      <Link key={route.path} href={route.path} prefetch={false}>
        <a className="flex p-5 w-6/12 group">
          <img src={route.icon} className="w-10 h-10 flex-0 mr-4 duration-100 transform group-hover:scale-110"/>
          <div>
            <div 
              className={`
                group-hover:underline
                ${pathname == route.path ? activeClass : ''}
              `}
            >
              {route.label}
            </div>
            <div className="text-sm font-light">
              {route.desc}
            </div>
          </div>
        </a>
      </Link>
    ))}
  </motion.div>
)

const NavbarMenu = ({routes = [], scrolled}) => {

  const { pathname } = useRouter()

  console.log(pathname)

  return (
    <div className="w-7/12 lg:w-5/12 hidden md:flex items-center font-semibold justify-between">
      {routes.map(route => (
        route.subItems ? (
          <Dropdown key={route.path} openOnHover>
            {(open, toggleOpen) => (
              <div className="flex justify-center">
                {Trigger(open, toggleOpen, route.label)}
                {open && (
                  <SubItems
                    items={route.subItems}
                    className={scrolled ? 'top-13' : 'top-16'}
                    pathname={pathname}
                  />
                )}
              </div>
            )}
          </Dropdown>
        ) : (
          <Link href={route.path} key={route.path} prefetch={false}>
            <a 
              className={`
                ${typeof route.label == 'string' ? 'p-3' : ''}
                ${typeof route.label == 'string' && route.path == pathname ? activeClass : ''}
              `}>
              {route.label}
            </a>
          </Link>
        )
      ))}
    </div>
  )
}
export default NavbarMenu