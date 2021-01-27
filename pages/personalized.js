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
      desc="Duis non elit accumsan, dignissim libero et, facilisis est. Vestibulum ante ipsum primis in faucibus orci luctus. Suspendisse ultrices ex rhoncus, vehicula magna at, tempor nunc. Curabitur libero ex, venenatis non lectus ut, feugiat molestie massa."
      link="/"
      linkLabel="Get mine"
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