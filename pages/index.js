import Head from 'next/head'
import Layout from '../components/Layout'
import Card from '../components/Card';
import List from '../components/List';
import Graph from '../components/Graph/Graph';
import responseTimes from '../data/hosting/responseTimes';
import Link from 'next/link';
import Button from '../components/Button';
import { paths } from '../data/routes'
import ClientsSlider from '../components/Slider/ClientsSlider'
import { motion } from 'framer-motion';
import { variants } from '../data/animations';
import { useState } from 'react';

const FeatureDesc = ({title, desc, items, link, linkLabel}) => (
  <div className="z-20 relative">
    <h4 className="text-xl font-bold mb-1">
      {title}
    </h4>
    <div className="mb-5">
      {desc}
    </div>
    <List items={items} />
    <div className="text-center lg:text-left">
      <Link href={link}>
        <a>
          <Button
            className="px-7 mt-4"
            type="blue"
          >
            {linkLabel}
          </Button>
        </a>
      </Link>
    </div>
  </div>
)

const CrmItem = ({icon, title, desc, link}) => (
  <div className="text-white mx-auto w-9/12 sm:w-5/12 md:w-4/12 lg:w-3/12 my-16 flex flex-col">
    <div className="h-10 flex items-center mb-2">
      <img className="" src={icon}/>
    </div>
    <h4 className="text-xl font-bold mb-1">
      {title}
    </h4>
    <div>
      {desc}
    </div>
    <div className="text-center mt-auto">
      <Link href={link}>
        <a>
          <Button
            className="px-7 mt-4 sm:w-full"
            type="default"
          >
            {title}
          </Button>
        </a>
      </Link>
    </div>
  </div>
)
// You are unique, so we are
// You are unique, so you deserve solid web hosting
// Looking for solid, fast web hosting?

// You are unique, we know you want the best IT team.
const FirstSection = () => (
  <div className="section container-small flex justify-around">

    <div className="md:mt-16 relative flex justify-center content-start flex-wrap">
      <div className="text-5xl font-bold w-full mb-5 font-quicksand">
        Looking for <span className="text-orange">unique</span>,<br/>
          <span className="text-orange">solid and fast</span><br/>
          Web Hosting?.
      </div>
      <div className="w-full">
        Finally, the trustworthy team your web business deserves.
      </div>

      <motion.img
        initial="hidden"
        animate="visible"
        variants={variants.DOWN}
        transition={{delay: 1}}
        className="hidden md:block absolute bottom-0"
        src="/icons/arrow-down.svg"
      />
    </div>

    <div className="hidden md:block">
      <div className="w-96 h-96 rounded-full overflow-hidden flex justify-center">
        <img className="max-w-none h-full" src="/images/young-man-laptop.jpg"/>
      </div>
    </div>
  </div>
)

const hostingItems = [
    '24/7 monitored',
    'Wordpress and XenForo ready',
    'Safe, secure and fast',
    'and we optimize your website too!'
]

const maintenanceItems = [
    'Adapted to your needs',
    'Security, optimization, troubleshooting',
    'Top-notch support staff'
]

const SecondSection = () => {
  
  const [ renderGraph, setRenderGraph ] = useState(true)

  return (
    <div className="section container">
      <Card
        style={{ borderWidth: 3, borderColor: 'var(--color-blue)' }}
        ribbon='Most Sold!'
      >
        <div className="max-w-5xl mx-auto lg:flex justify-around items-center p-8 md:p-3">
          <div className="lg:w-6/12">
            <FeatureDesc
              title="Know our hosting plans"
              desc="We only offer high-performance web hosting."
              items={hostingItems}
              link={paths.HOSTING}
              linkLabel="Hosting plans"
            />
          </div>
          <div className="lg:w-6/12 mt-10">
            <div className="text-orange font-semibold">
              Loading time <span className="font-light">(normal XenForo set up)</span>
            </div>
            {renderGraph && <Graph data={responseTimes} />}
          </div>
        </div>
      </Card>
    </div>
  )
}

const ThirdSection = () => (
  <div className="relative pb-28">
    <div className="container lg:flex flex-row-reverse justify-around">
      <div className="lg:w-6/12 p-3 flex justify-center">
        <FeatureDesc
          title="Maintenance plans"
          desc={<><p>Let our experts handle the technical part of your IT infrastructure and never worry about your website again.</p><br/><p>Our support team will keep your website updated, schedule automated offsite backups, security scans, and more.</p></>}
          items={maintenanceItems}
          link={paths.MAINTENANCE}
          linkLabel="Maintenance plans"
        />
      </div>
      <div className="lg:w-6/12 relative flex justify-center">
        <img
          className="lg:absolute -bottom-2 w-9/12 z-10 mx-auto"
          src="/images/spaceship.svg"
          alt="Todo10"
        />
        <img
          className="absolute -bottom-28 md:-bottom-40 max-w-none"
          style={{width: '170%', minWidth: 500, zIndex: -1}}
          src="/images/cloud.svg"
        />
      </div>
    </div>
  </div>
)

const FourthSection = () => (
  <div className="bg-blue py-10">
    <div className="container sm:flex justify-around items-stretch">
      <CrmItem
        icon="/icons/wordpress-circle.svg"
        title="WordPress Services"
        desc="We offer WP custom development, consulting, custom themes, security audits and maintenance."
        link={paths.WORDPRESS}
      />
      <CrmItem
        icon="/icons/xenforo-text.svg"
        title="XenForo Services"
        desc="Migration, tuning, addons, styles, we are pros and can do anything on XenForo!"
        link={paths.XENFORO}
      />
    </div>
  </div>
)

const somethingElseItems = [
    {icon: '/icons/server-list.svg', label: 'Dedicated Servers'},
    {icon: '/icons/seo-list.svg', label: 'SEO'},
    {icon: '/icons/web-design-list.svg', label: 'Web Design'},
    {icon: '/icons/world-list.svg', label: 'Anything you need, just ask about it!'},
]

const FifthSection = () => (
  <div className="section container flex justify-center flex-wrap">
    <h3 className="text-xl font-semibold w-full text-center">
      Still looking for more stuff?
    </h3>
    <div>
      {somethingElseItems.map(({icon, label}) => (
        <div key={icon} className="flex items-center my-5">
          <img className="mr-5 w-8" src={icon}/>
          <div>{label}</div>
        </div>
      ))}
    </div>
    <div className="w-full text-center mt-4">
      <Link href={paths.PERSONALIZED}>
        <a>
          <Button type="blue">Custom Services</Button>
        </a>
      </Link>
    </div>

  </div>
)

const BenefitCard = ({icon, title, desc}) => (
  <Card
    className="flex-shrink-0 max-w-xs mx-4 sm:flex-1 p-6 py-10"
    bordered={false}
    shadow
    style={{maxWidth: 250, padding: '35px 25px'}}
  >
    <Card.Content
      icon={icon}
      title={title}
      desc={desc}
    />
  </Card>
)

function BenefitTitle({text}) {
  return (
    <span className="text-xl font-bold">
      {text}
    </span>
  )
}

function BenefitP({text}) {
  return (
    <p className="text-sm font-semibold mt-3">
      {text}
    </p>
  )
}

const SixthSection = () => (
  <div className="section bg-gray-200 py-16 px-6 overflow-auto">
    <h3 className="text-center mb-10">Why choose us?</h3>
    <div className="flex sm:justify-center">
      <BenefitCard
        icon="/icons/timer.svg"
        title={<BenefitTitle text="Large experience" />}
        desc={<BenefitP text="More than a decade of experience, you can be rest assured we will be around for the long-haul." />}
      />
      <BenefitCard
        icon="/icons/sand-clock.svg"
        title={<BenefitTitle text="Your time" />}
        desc={<BenefitP text="It doesn’t matter how is your schedule or in what time zone are you, our team can match your needs." />}
      />
      <BenefitCard
        icon="/icons/messages.svg"
        title={<BenefitTitle text="Constant support" />}
        desc={<BenefitP text="24 hours a day, 7 days a week, 356 days a year, the fastest and most efficient help. " />}
      />
    </div>
  </div>
)

const SeventhSection = () => (
  <>
    <h3 className="text-orange text-center mb-12">What Our Clients Say</h3>
    <ClientsSlider/>
  </>
)

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Todo 10 - Home</title>
      </Head>
      <div className="my-40"/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <div className="my-60"/>
    </Layout>
  )
}