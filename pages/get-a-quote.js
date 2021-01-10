import Layout from '../components/Layout'
import FeatureHighlight from '../components/FeatureHighlight'
import List from '../components/List'
import ContactForm from '../containers/ContactForm';

const list = [
  'First point',
  'What about other',
  'Here goes another',
  'Other one'
] 

const FirstSection = () => (
  <div className="section bg-blue py-16">
    <div className="container text-white">
      <FeatureHighlight
        image="/icons/pencil.svg"
        title="Something important"
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
        <ContactForm extended/>
      <div className="my-60"/>
    </Layout>
  )
}