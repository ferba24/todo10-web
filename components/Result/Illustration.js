import Girl from './Girl'
import Balloon from './Balloon'
import Wheel from './Wheel'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
}

const defaultTransition = {
  type: 'spring',
  bounce: 0.5
}

const Animated = ({children, transition, ...rest}) => (
  <motion.div
    initial="hidden"
    animate="visible"    
    variants={variants}
    transition={{...defaultTransition, ...transition}}
    {...rest}
  >
    {children}
  </motion.div>
)

const style = {
  width: 360,
  height: 360
}

export default function Illustration() {

  return (
      <div
        className="rounded-full transform scale-90 md:scale-100 overflow-hidden pt-11 pl-11 mx-auto"
        style={style}
      >
        <div className="relative">
          <Animated
            className="relative z-10"
            transition={{delay: 0.5}}
          >
            <Girl/>
          </Animated>
          <Animated
            className="absolute top-5 -left-6"
            transition={{delay: 0.7}}
          >
            <Balloon/>
          </Animated>
          <Animated
            className="absolute top-40 left-8 z-0"
            transition={{delay: 0.8}}
          >
            <Wheel/>
          </Animated>
          <Animated
            className="absolute top-28 left-48 z-0"
            transition={{delay: 1}}
          >
            <Wheel size={80} fill='#F1F1F1'/>
          </Animated>
        </div>
      </div>
  )
}