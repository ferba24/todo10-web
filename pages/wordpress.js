import FeatureHighlight from '../components/FeatureHighlight/FeatureHighlight'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader/PageHeader'
import { paths } from '../data/routes'
import ContactForm from '../components/ContactForm'
import WithSend from '../components/ContactForm/WithSend'

const FirstSection = () => (
  <>
    <div className="section container">
      <PageHeader
        title="Custom WordPress Services"
        desc="We have been helping over 200+ customers worldwide with WordPress web development services to deliver 130+ sites every month. We believe that our journey to build powerful digital solutions and enjoyable user experience with our WordPress Development Services has just begun."
      />
    </div>
    <div className="section container-small">
      <FeatureHighlight
        image="/icons/wordpress-screen.svg"
        title={<span className="text-orange">Why Choose Wordpress?</span>}
        desc={<div>WordPress is, by far, the most popular open source Content Management System (CMS), used by approximately 75 million websites.

            <br/><br/>Thousands of plugins and templates power a flexible and simple interface, which reduces development costs and deployment time.</div>}
      />
    </div>
  </>
)

const SecondSection = () => (
  <div className="section container-small">
    <FeatureHighlight
      image="/icons/server.svg"
      title={<span>Wordpress <span className="text-orange">Hosting Plans</span></span>}
      desc="Providing reliability and security for your business with high-quality hosting. Full managed optimized hosting powered by Litesped & secure backups. "
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
        title={<span>Wordpress <span className="text-orange">Maintenance Plans</span></span>}
        desc={<span>Let Todo10 deal with necessary maintenance while you take care of publishing great content, monetizing and growing your website.</span>}
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

export default function Wordpress() {

  return (
    <Layout>
      <div className="my-40"/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
      <div className="my-60"/>
    </Layout>
  )
}