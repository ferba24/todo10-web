import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import FeatureHighlight from '../components/FeatureHighlight/FeatureHighlight';
import List from '../components/List'
import ContactForm from '../components/ContactForm';

const list = [
  'First point',
  'What about other',
  'Here goes another',
  'Other one'
] 

const wheels = (
  <img
    src="/images/about-us-wheels.svg"
    className="absolute z-0 max-w-none"
    style={{maxWidth: '220%', left: '-40%'}}
  />
)

const BlueSection = () => (
  <div className="section bg-blue py-20">
    <div className="container text-white">
      <FeatureHighlight
        image="/icons/pencil.svg"
        title="Something important"
        desc={<List primary items={list}/>}
        imageStyle={{maxWidth: 170}}
        leftExtra={wheels}
      />
    </div>
  </div>
)

const ContactSection = () => (
  <div className="section container">
    <h3 className="text-orange text-center mb-8">
      Contact us!
    </h3>
    <ContactForm
      buttonRight
      buttonPrimary
    />
  </div>  
)

export default function AboutUs() {

  const headerTitle = (
    <div className="flex items-center justify-center">
      <span>About</span>
      <img
        className="h-7 ml-4"
        style={{marginTop: 2}}
        src="/logo.svg"
        alt="Todo 10 about us"
      />
    </div>
  )

  const cloud = (
    <img
      src="/images/cloud.svg"
      className="absolute z-0 max-w-none bottom-32"
      style={{maxWidth: '220%', left: '-150%'}}
    />
  )

  return (
    <Layout>
      <div className="my-40"/>
      <div className="section container">
        <PageHeader
          title={headerTitle}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices ex rhoncus, vehicula magna at, tempor nunc."
        />
      </div>
      <div className="section container">
        <FeatureHighlight
          image="/images/about-us.svg"
          title={<span className="text-orange">Title of a section</span>}
          desc="Providing reliability and security for your business with high-quality hosting. Full managed optimized hosting powered by Litesped."
          leftExtra={cloud}
        />
      </div>
      <div className="section container">
        <FeatureHighlight
          image="/images/spaceship-with-wheels.svg"
          title={<span className="text-orange">Title of a section</span>}
          desc="Providing reliability and security for your business with high-quality hosting. Full managed optimized hosting powered by Litesped."
          reverse
        />
      </div>
      <BlueSection/>
      <ContactSection/>
      <div className="my-60"/>
    </Layout>
  )
}