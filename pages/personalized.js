import Layout from '../components/Layout'
import Stepper from '../components/Stepper';
import { personalizedStep } from '../data/steps'
import FeatureHighlight from '../components/FeatureHighlight'
import List from '../components/List'

const FirstSection = () => (
  <div className="section container-small">
    <FeatureHighlight
      image="/images/personalized.svg"
      title="Personalized services."
      desc="You have a vision. We have a team to get you there."
      link="/"
      linkLabel="Get a quote"
    />
  </div>
)

const list = [
  'First point',
  'What about other',
  'Here goes another',
  'Other one'
] 

const SecondSection = () => (
  <div className="section bg-blue py-16">
    <div className="w-11/12 max-w-4xl mx-auto text-white">
      <FeatureHighlight
        image="/images/pencil-with-wheels.svg"
        title="Something important"
        desc={<List primary items={list}/>}
        reverse
      />
    </div>
  </div>
)

export default function Personalized() {

  return (
    <Layout>
      <div className="my-40"/>
      <FirstSection/>
      <SecondSection/>
      <div className="section container">
        <h3 className="text-orange text-center">Get your quote</h3>
        <Stepper initialStep={personalizedStep}/>
      </div>
      <div className="my-60"/>
    </Layout>
  )
}