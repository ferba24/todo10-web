import { useState } from 'react'
import BottomDrawer from '../BottomDrawer'
import faq from '../../data/faq'
import Expand from '../Expand'
import wavesImage from './waves.svg'
import { motion } from 'framer-motion'

export default function Footer({className, style}) {

  const [faqVisible, setFaqVisible] = useState(false)

  return (
    <div
      className={`relative flex justify-center ${className}`}
      style={style}
    >
      <BottomDrawer
        className="w-6/12 mx-auto z-10"
        headerTitle="Frequently Asked Questions"
        visible={faqVisible}
        onClick={() => setFaqVisible(!faqVisible)}
      >
        {faq.map((item, i) => (
          <Expand key={item.key} title={item.title} expanded={i == 0}>
            {item.desc}
          </Expand>
        ))}
      </BottomDrawer>
      
      <div className="bg-blue h-40 w-full z-20"/>

      <motion.img
        onClick={() => faqVisible && setFaqVisible(false)}
        className="absolute z-0"
        initial={{y: -190}}
        animate={{y: faqVisible ? -480 : -190}}
        transition={{
          type: 'spring',
          mass: 0.1
        }}
        src={wavesImage}
      />
    </div>
  )
}