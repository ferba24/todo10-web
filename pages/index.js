import Head from 'next/head'
import Layout from '../components/Layout'
import Card from '../components/Card';
import List from '../components/List';
import Graph from '../components/Graph/Graph';
import responseTimes from '../data/hosting/responseTimes';
import Link from 'next/link';
import Button from '../components/Button';
import { paths } from '../data/routes'

const FeatureDesc = ({title, desc, items, link, linkLabel}) => (
  <div className="z-20 relative">
    <h3 className="text-xl font-semibold mb-1">
      {title}
    </h3>
    <div className="mb-5">
      {desc}
    </div>
    <List items={items} />
    <div className="text-center md:text-left">
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
  <div className="text-white mx-auto w-9/12 sm:w-5/12 md:w-4/12 lg:w-3/12 my-16">
    <div className="h-10 flex items-center mb-2">
      <img className="" src={icon}/>
    </div>
    <h3 className="text-xl font-bold mb-1">
      {title}
    </h3>
    <div>
      {desc}
    </div>
    <div className="text-center">
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

const FourthSection = () => (
  <div className="bg-blue py-10">
    <div className="container sm:flex justify-around items-stretch">
      <CrmItem
        icon="/icons/wordpress-circle.svg"
        title="WordPress Services"
        desc="Themes, plugins, hosting, we do it all!"
        link={paths.WORDPRESS}
      />
      <CrmItem
        icon="/icons/xenforo-text.svg"
        title="XenForo Services"
        desc="Migration, tunning, addons, styles, we are pros and can do anything!"
        link={paths.XENFORO}
      />
    </div>
  </div>
)

const somethingElseItems = [
  {icon: '/icons/seo-list.svg', label: 'SEO'},
  {icon: '/icons/web-design-list.svg', label: 'Web Design'},
  {icon: '/icons/server-list.svg', label: 'Dedicated services'},
  {icon: '/icons/world-list.svg', label: 'Everything you need, just ask about it!'},
]

const FifthSection = () => (
  <div className="section container flex justify-center flex-wrap">
    <h3 className="text-xl font-semibold w-full text-center">
      Do you need something else?
    </h3>
    <div>
      {somethingElseItems.map(({icon, label}) => (
        <div className="flex items-center my-5">
          <img className="mr-5 w-8" src={icon}/>
          <div>{label}</div>
        </div>
      ))}
    </div>
    <div className="w-full text-center mt-4">
      <Link href={paths.PERSONALIZED}>
        <a>
          <Button type="blue">Personalized services</Button>
        </a>
      </Link>
    </div>

  </div>
)

const SixthSection = () => (
  <div className="section bg-gray-200 py-24">
    <div className="container">
    </div>

  </div>
)

export default function Hosting() {

  const firstSection = (
    <div className="section container flex justify-around">

      <div className="mt-16">
        <div className="text-4xl font-bold">
          You are <span className="text-orange">unique</span>,<br/>
          so we are.
        </div>
        <div>
          Finally, the trustworthy team your web business deserves.
        </div>
      </div>

      <div className="hidden md:block">
        <div className="w-96 h-96 rounded-full overflow-hidden flex justify-center">
          <img className="max-w-none h-full" src="/images/young-man-laptop.jpg"/>
        </div>
      </div>
    </div>
  )
  
  const hostingItems = [
    'Real time monitoring',
    'Wordpress and Xenforo ready',
    'Safe and secure',
    'Fast and optimum performance!'
  ]

  const secondSection = (
    <div className="section container">
      <Card
        style={{ borderWidth: 3, borderColor: 'var(--color-blue)' }}
        ribbon='Most Sold!'
      >
        <div className="md:flex justify-around items-center p-3">
          <div className="flex-1 mt-4 ml-4 md:mt-0">
            <FeatureDesc
              title="Know our hosting plans"
              desc="We offer a high-performance web hosting."
              items={hostingItems}
              link={paths.HOSTING}
              linkLabel="Hosting plans"
            />
          </div>
          <div className="flex-1 m-4 mt-10 md:m-0">
            <div className="text-orange font-semibold">
              Response time <span className="font-light">(in seconds)</span>
            </div>
            <Graph data={responseTimes} />
          </div>
        </div>
      </Card>
    </div>
  )

  const thirdSection = (
    <div className="relative pb-28">
      <div className="container md:flex flex-row-reverse justify-around">
        <div>
          <FeatureDesc
            title="Maintenance plans"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            items={hostingItems}
            link={paths.MAINTENANCE}
            linkLabel="Maintenance plans"
          />
        </div>
        <div className="flex-1 relative">
          <img
            className="md:absolute bottom-0 left-8 w-9/12 z-10 mx-auto"
            src="/images/spaceship.svg"
            alt="Todo10"
          />
          <img
            className="absolute -bottom-52 max-w-none"
            style={{width: '140%', zIndex: -1}}
            src="/images/cloud.svg"
          />
        </div>
      </div>
    </div>
  )

  return (
    <Layout>
      <Head>
        <title>Todo 10 - Home</title>
      </Head>
      <div className="my-40"/>
      {firstSection}
      {secondSection}
      {thirdSection}
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <div className="my-60"/>
    </Layout>
  )
}