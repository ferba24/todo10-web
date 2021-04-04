import FeatureHighlight from '../components/FeatureHighlight/FeatureHighlight'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader/PageHeader'
import { paths } from '../data/routes'
import ContactForm from '../components/ContactForm'
import WithSend from '../components/ContactForm/WithSend'
import Head from "next/head";

const SearchCode = () => (
  <img
    src="/icons/search-code.svg"
    className="absolute z-0 w-44 -left-12 bottom-2 md:-bottom-20 opacity-60"
  />
)

const FirstSection = () => (
  <>
    <div className="section container">
      <PageHeader
        title="Xenforo services"
        desc="More than 10 years of expertise give us the confidence we can take any work or XenForo project you have in mind."
      />
    </div>
    <div className="section container-small">
      <FeatureHighlight
        image="/images/xenforo.svg"
        title={<span className="text-orange">Compelling community forum platform</span>}
        desc={<div>There is no better platform upon which to grow your discussion board. Developed by former vBulletin lead developers Kier Darby and Mike Sullivan with over 20 years of experience in developing forum software, XenForo is a product that has been designed with speed, security, and flexibility in mind.
            <br /><br />
            The end users have a variety of tools at their disposal that allow them to communicate effectively with others, while administrators and moderators have powerful tools that allow them to move, edit, or delete posts, threads, and users, as well as a powerful control panel to control the look, feel, and function of the discussion board.</div>}
        leftExtra={<SearchCode />}
      />
    </div>
  </>
)

const SecondSection = () => (
  <div className="section container-small">
    <FeatureHighlight
      image="/icons/server.svg"
      title={<span>Xenforo <span className="text-orange">Hosting Plans</span></span>}
      desc="Providing reliability and security for your XenForo forum with high-quality hosting. Full managed optimized hosting powered by Litesped & secure backups. "
      link={paths.HOSTING}
      linkLabel="Know more"
      reverse
    />
  </div>
)

const Cloud = () => (
  <img
    src="/images/cloud.svg"
    className="absolute z-0 max-w-none bottom-4 md:-bottom-10 opacity-40"
    style={{maxWidth: '220%', left: '-150%'}}
  />
)

const ThirdSection = () => (
  <div className="section bg-gray-100">
    <div className="container-small py-20">
      <FeatureHighlight
        image="/icons/laptop.svg"
        title={<span>Xenforo <span className="text-orange">Maintenance Plans</span></span>}
        desc={<span>We take care of all the technical aspects of your forum..</span>}
        link={paths.MAINTENANCE}
        linkLabel="Know more"
        leftExtra={<Cloud />}
      />
    </div>
  </div>
)

const FourthSection = () => (
  <div className="section py-14">
    <h3 className="text-orange text-center mb-10">
      Or contact us!
    </h3>
    <WithSend>
      {({send, sending}) => (
        <ContactForm
          buttonRight
          buttonPrimary
          onFinish={send}
          sending={sending}
        />
      )}
    </WithSend>
  </div>
)

export default function Xenforo() {

  return (
    <Layout>
        <Head>
            <title>Todo 10 - XenForo</title>
        </Head>
      <div className="my-40"/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
      <div className="my-60"/>
    </Layout>
  )
}