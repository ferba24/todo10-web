import Layout from '../components/Layout'
import Stepper from '../components/Stepper';
import { personalizedStep } from '../data/steps'
import FeatureHighlight from '../components/FeatureHighlight'
import List from '../components/List'
import Head from "next/head";
import PageHeader from "../components/PageHeader";

const FirstSection = () => (
    <>
    <div className="section container">
        <PageHeader
            title="Custom Services"
            desc={<>You have a VISION.<br />We have a TEAM to get you there. Whatever you need.</>}
        />
    </div>



</>
)
/*

  <div className="section container-small">
    <FeatureHighlight
      image="/images/personalized.svg"
      title="Custom Services."
      desc={<>You have a VISION.<br />We have a TEAM to get you there. Whatever you need.</>}
      link="/"
      linkLabel="Get a Quote"
    />
  </div>

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
*/
export default function Personalized() {

  return (
    <Layout>
        <Head>
            <title>Todo 10 - Custom Services</title>
        </Head>
      <div className="my-40"/>
      <FirstSection/>
      <SecondSection/>
      <div className="section container-medium">
        <h3 className="text-orange text-center">Get your quote</h3>
        <Stepper initialStep={personalizedStep}/>
      </div>
      <div className="my-60"/>
    </Layout>
  )
}