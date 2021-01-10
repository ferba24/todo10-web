import { useState } from 'react'
import Button from '../Button'
import Card from '../Card'
import { AnimatePresence, motion } from 'framer-motion'
import useMediaQuery from '../../lib/useMediaQuery'

const variants = {
  hidden: { opacity: 0, height: 0},
  visible: { opacity: 1, height: 'fit-content'}
}

const transition = { type: 'tween' }

const itemMap = (item, i) => (
  <motion.div
    key={i}
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={variants}
    transition={transition}
    className="w-6/12 md:w-4/12"
  >
    <div className="p-1 sm:p-2 md:p-3">
      <Card bordered={false} shadow>
        <Card.Content {...item}/>
      </Card>
    </div>
  </motion.div>
)

const validateBenefits = (benefits) => {
  if(!Array.isArray(benefits)) {
    console.error('benefits must be an array, got:', typeof benefits)
  }

  return true
}

export default function BenefitsSection({benefits = []}) {

  const [expanded, setExpanded] = useState(false)

  const smallScreen = useMediaQuery(768)
  const itemsToShow = smallScreen ? 4 : 3

  if(!validateBenefits(benefits)) return null

  const items = expanded ? benefits : benefits.slice(0, itemsToShow)

  const bottom = (
    <div className="bg-gray-200 text-center lg:rounded-xl py-10 lg:py-4">
      <Button
        type="blue"
        className="px-16"
        onClick={() => setExpanded(!expanded)}
      >
        See {expanded ? 'less' : 'more'}
      </Button>
    </div>
  )

  return (
    <div className="bg-gray-100 lg:rounded-xl">
      <h3 className="pt-10 mb-5 text-center">
        Benefits you'll get
      </h3>
      <div className="flex flex-wrap p-2 md:p-3 overflow-hidden w-full max-w-4xl mx-auto">
        <AnimatePresence initial={false}>
          {items.map(itemMap)}
        </AnimatePresence>
      </div>

      {bottom}
    </div>
  )
}