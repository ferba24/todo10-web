import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import vhCheck from 'vh-check'

const backdropVariants = {
  hidden: { opacity: 0, },
  visible: { opacity: 0.5, }
}

const drawerVariants = {
  hidden: { x: '100%', },
  visible: { x: '0%', }
}

export default function Drawer({
  visible,
  onClose,
  children
}) {

  const vhCheckOptions = { updateOnTouch: true }
  useEffect(() => {
    vhCheck(vhCheckOptions)
  }, [])

  const backdrop = (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={backdropVariants}
      onClick={onClose}
      className="top-0 left-0 absolute w-full h-full bg-black"
    />
  )

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed flex justify-end top-0 left-0 w-full z-40 h-screen">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            transition={{ type: 'tween', ease: 'easeInOut' }}
            className="relative h-full right-0 w-full sm:w-6/12 bg-white z-10 border-4 border-blue rounded-lg"
          >
            {children}
          </motion.div>
          {backdrop}
        </div>
      )}
    </AnimatePresence>
  )
}