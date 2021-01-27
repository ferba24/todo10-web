import { useState } from 'react'
import BottomDrawer from '../BottomDrawer'
import faq from '../../data/faq'
import Expand from '../Expand'
import { motion } from 'framer-motion'
import {
  topItems,
  pricingItems,
  aboutUsItems
} from '../../data/footer'
import { services } from '../../data/routes'
import FooterItem from './FooterItem'
import FooterList from './FooterList'
import Newsletter from './Newsletter'

const Top = () => (
  <div className="container flex flex-wrap my-20">
      {topItems.map(item => (
        <div key={item.key} className="px-5 lg:px-10 py-4 lg:w-4/12">
          <FooterItem {...item}/>
        </div> 
      ))}
  </div>
)

const Bottom = () => (
  <div className="container flex flex-wrap my-20">
    <div className="w-full lg:flex-1 my-8 px-4">
      <Newsletter/>
    </div>
    <div className="w-full lg:flex-1 my-8 px-4">
      <FooterList title="Services" items={services} />
    </div>
    <div className="w-full lg:flex-1 my-8 px-4">
      <FooterList {...pricingItems} />
    </div>
    <div className="w-full lg:flex-1 my-8 px-4 flex flex-col">
      <FooterList {...aboutUsItems} />
    </div>
  </div>
)

export default function Footer({className = '', style}) {

  const [faqVisible, setFaqVisible] = useState(false)

  const faqTitle = (
    <>
      <span className="hidden sm:block">Frequently Asked Questions</span>
      <span className="block sm:hidden">FAQs</span>
    </>
  )

  return (
    <div
      className={`relative flex justify-center ${className}`}
      style={style}
    >
      <BottomDrawer
        className="mx-auto z-10 w-11/12 max-w-xl"
        headerTitle={faqTitle}
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
        <Top/>
        <Bottom/>
      </div>

      <motion.img
        onClick={() => faqVisible && setFaqVisible(false)}
        className="absolute"
        style={{zIndex: -1}}
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