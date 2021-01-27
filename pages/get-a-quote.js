import Layout from '../components/Layout'
import FeatureHighlight from '../components/FeatureHighlight'
import List from '../components/List'
import ContactForm from '../components/ContactForm';

const list = [
  'Provide details',
  'Tell us your vision',
  'Describe your needs',
  'Every moment is a fresh beginning.'
] 

const FirstSection = () => (
  <div className="section bg-blue py-16">
    <div className="container text-white">
      <FeatureHighlight
        image="/icons/pencil.svg"
        title="Remember"
        desc={<List primary items={list}/>}
        reverse
      />
    </div>
  </div>
)

export default function GetAQuote() {

  return (
    <Layout>
      <div className="my-40"/>
        <div className="w-11/12 mx-auto">
          <ContactForm extended/>
        </div>
      <div className="my-60"/>
    </Layout>
  )
}