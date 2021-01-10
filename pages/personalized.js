import Layout from '../components/Layout'
import Stepper from '../components/Stepper';
import { personalizedStep } from '../data/steps'
import FeatureHighlight from '../components/FeatureHighlight'
import List from '../components/List'

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

export default function Personalized() {

  return (
    <Layout>
      <div className="my-40"/>
      <FirstSection/>
      <div className="section container">
        <Stepper initialStep={personalizedStep}/>
      </div>
      <div className="my-60"/>
    </Layout>
  )
}