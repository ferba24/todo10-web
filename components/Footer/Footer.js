import { useState } from 'react'
import BottomDrawer from '../BottomDrawer'
import faq from '../../data/faq'
import Expand from '../Expand'
import { motion } from 'framer-motion'
import { topItems } from '../../data/footer'
import FooterItem from '../FooterItem/FooterItem'
import { services } from '../../data/routes'
import Link from 'next/link'

const TopItems = () => (
  <div className="container flex flex-wrap">
      {topItems.map(item => (
        <div key={item.key} className="px-10 py-4 w-full md:w-4/12">
          <FooterItem {...item}/>
        </div> 
      ))}
  </div>
)

const BottomItems = () => (
  <div className="container flex flex-wrap">
    <div className="w-full md:w-4/12">
      <div className="font-semibold">
        Services
      </div>
      {services.map(({label, path}) => (
        <div key={path}>
          <Link href={path}>
            <a>{label}</a>
          </Link>
        </div>
      ))}
    </div>
  </div>
)

export default function Footer({className = '', style}) {

  const [faqVisible, setFaqVisible] = useState(false)

  return (
    <div
      className={`relative flex justify-center ${className}`}
      style={style}
    >
      <BottomDrawer
        className="mx-auto z-10 w-11/12 max-w-xl"
        headerTitle="Frequently Asked Questions"
        visible={faqVisible}
        onClick={() => setFaqVisible(!faqVisible)}
      >
        {faq.map((item, i) => (
          <Expand
            key={item.key}
            title={<span className="font-semibold">{item.title}</span>}
            expanded={i == 0}
            className="my-4"
          >
            <div className="opacity-70 font-extralight text-sm mx-3.5">
              {item.desc}
            </div>
          </Expand>
        ))}
      </BottomDrawer>
      
      <div className="bg-blue w-full z-20 text-white">
        <TopItems/>
        <BottomItems/>
      </div>

      <motion.img
        onClick={() => faqVisible && setFaqVisible(false)}
        className="absolute z-0"
        initial={{y: -190}}
        animate={{y: faqVisible ? -480 : -190}}
        transition={{
          type: 'spring',
          mass: 0.1
        }}
        src="/images/waves-footer.svg"
      />
    </div>
  )
}