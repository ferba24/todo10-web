import { motion } from 'framer-motion'
import Arrow from '../Arrow'

export default function BottomDrawer({headerTitle, visible, onClick, className, children}) {

  const header = (
    <div
      className="flex items-center select-none p-4 sm:p-7 cursor-pointer tap-highlight-transparent"
      onClick={onClick}
    >
      <div className="mr-3 text-xl text-primary">
        {headerTitle}
      </div>
      <Arrow size="small" direction={visible ? 'down' : 'right'} />
    </div>
  )

  return (
    <motion.div
      className={`bg-white absolute -top-12 sm:-top-16 rounded-2xl sm:rounded-3xl shadow-xl pb-10 ${className}`}
      initial={{ y: -12 }}
      animate={{
        y: visible ? 'calc(-100% + 90px)' : -12
      }}
      transition={{
        type: 'spring',
        duration: 0.5
      }}
    >
      {header}
      <div className="p-4 sm:p-7 pt-0">
        {children}
      </div>
    </motion.div>
  )
}