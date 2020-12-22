import { motion } from 'framer-motion'
import Arrow from '../Arrow'

export default function BottomDrawer({headerTitle, visible, onClick, className, children}) {

  const header = (
    <div
      className="flex items-center mb-7 select-none"
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
      className={`cursor-pointer bg-white absolute -top-16 rounded-3xl shadow-xl p-7 pb-10 ${className}`}
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
      {children}
    </motion.div>
  )
}