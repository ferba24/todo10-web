import FeatureHighlight from '../components/FeatureHighlight/FeatureHighlight'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader/PageHeader'
import { paths } from '../data/routes'
import ContactForm from '../components/ContactForm'

const FirstSection = () => (
  <>
    <div className="section">
      <PageHeader
        title="Wordpress services"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices ex rhoncus, vehicula magna at, tempor nunc."
      />
    </div>
    <div className="section container-small">
      <FeatureHighlight
        image="/icons/wordpress-screen.svg"
        title={<span className="text-orange">Why choose wordpress?</span>}
        desc={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices ex rhoncus, vehicula magna at, tempor nunc. Curabitur libero ex, venenatis non lectus ut, feugiat molestie massa. Nunc volutpat sit amet nunc vitae ultrices. Etiam et tellus at nulla congue gravida at vitae libero.<br/><br/>In pellentesque arcu et tortor blandit mattis. Praesent molestie eleifend mauris, non facilisis orci consectetur in. Aliquam mollis volutpat ipsum, eu porttitor orci mollis quis.</div>}
      />
    </div>
  </>
)

const SecondSection = () => (
  <div className="section container-small">
    <FeatureHighlight
      image="/icons/server.svg"
      title={<span>Wordpress <span className="text-orange">Hosting Plans</span></span>}
      desc="Providing reliability and security for your business with high-quality hosting. Full managed optimized hosting powered by Litesped. "
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
  <div className="section bg-gray-200">
    <div className="container-small py-20">
      <FeatureHighlight
        image="/icons/laptop.svg"
        title={<span>Xenforo <span className="text-orange">Maintenance Plans</span></span>}
        desc={<span>Duis non elit accumsan, dignissim libero et, facilisis est. Vestibulum ante ipsum primis in faucibus orci luctus. Suspendisse ultrices ex rhoncus, vehicula magna at, tempor nunc.</span>}
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
    <ContactForm
      buttonRight
      buttonPrimary
    />
  </div>
)

export default function Pricing() {

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