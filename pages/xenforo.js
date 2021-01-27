import FeatureHighlight from '../components/FeatureHighlight/FeatureHighlight'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader/PageHeader'
import { paths } from '../data/routes'
import ContactForm from '../components/ContactForm'

const SearchCode = () => (
  <img
    src="/icons/search-code.svg"
    className="absolute z-0 w-44 -left-12 bottom-2 md:-bottom-20 opacity-60"
  />
)

const FirstSection = () => (
  <>
    <div className="section">
      <PageHeader
        title="Xenforo services"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices ex rhoncus, vehicula magna at, tempor nunc."
      />
    </div>
    <div className="section container-small">
      <FeatureHighlight
        image="/images/xenforo.svg"
        title={<span className="text-orange">Compelling community forum platform</span>}
        desc={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices ex rhoncus, vehicula magna at, tempor nunc. Curabitur libero ex, venenatis non lectus ut, feugiat molestie massa. Nunc volutpat sit amet nunc vitae ultrices. Etiam et tellus at nulla congue gravida at vitae libero.<br/><br/>In pellentesque arcu et tortor blandit mattis. Praesent molestie eleifend mauris, non facilisis orci consectetur in. Aliquam mollis volutpat ipsum, eu porttitor orci mollis quis.</div>}
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
    <ContactForm
      buttonRight
      buttonPrimary
    />
  </div>
)

export default function Xenforo() {

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