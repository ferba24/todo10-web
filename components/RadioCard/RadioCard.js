import Card from '../Card'
import { motion } from 'framer-motion'
import RadioCircle from '../RadioCircle'

export default function RadioCard({children, checked, ribbon, ...props}) {

  return (
    <motion.div
      animate={{ scale: checked ? 1.05 : 1 }}
      transition={{
        type: 'tween',
        ease: [.07,.79,.45,1],
        duration: 0.3
      }}
      {...props}
    >
      <Card
        className={`cursor-pointer ${checked ? 'bg-orange text-white' : 'bg-white'}`}
        bordered={!checked}
        shadowOnHover
        ribbon={ribbon}
      >
        <RadioCircle
          className="absolute right-3 top-3 z-10"
          checked={checked}
          checkedColor="white"
        />
        {children}
      </Card>
    </motion.div>
  )
}

RadioCard.Content = Card.Content