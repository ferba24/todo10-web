import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Result from '../Result'
import { variants } from '../../data/animations'
import sendEmail from '../../lib/sendEmail'

const Animated = ({ children }) => (
  <motion.div
    initial={variants.UP.hidden}
    animate={variants.UP.visible}
    exit={variants.UP.hidden}
  >
    {children}
  </motion.div>
)

export default function WithSend({ children }) {

  const [sending, setSending] = useState(false)
  const [finished, setFinished] = useState(false)

  if (typeof children != 'function') {
    console.error('The child of `<Option>` must be a function', children)
    return null
  }

  const send = async values => {
    setSending(true)
    await sendEmail(values)
    setSending(false)
    setFinished(true)
  }

  const props = {
    send,
    sending
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {!finished ? (
        <Animated key="children">
          {children(props)}
        </Animated>
      ) : (
        <Animated key="result">
          <Result />
        </Animated>
      )}
    </AnimatePresence>
  )
}