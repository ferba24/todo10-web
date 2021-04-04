import Layout from '../components/Layout'
import BenefitsSection from '../components/BenefitsSection'
import Stepper from '../components/Stepper';
import { maintenanceOptions } from '../data/steps'
import benefits from '../data/maintenance/benefits'
import FeatureHighlight from '../components/FeatureHighlight'
import { paths } from '../data/routes';
import Head from "next/head";

const FirstSection = () => (
  <div className="section container-small">
    <FeatureHighlight
      image="/icons/laptop.svg"
      title={<>What is a <span className="text-orange">maintenance plan</span>?</>}
      desc={<>We’ll do all the tech work and take care of the issues so you don’t have to. <br />Many customers need help with their website because they don’t have the time or knowledge to manage it properly and that’s where we come in. <br /><b>We have the expertise and experience to effectively manage your site for you.</b></>}
      link={paths.MAINTENANCE}
      linkLabel="Get Started"
    />
  </div>
)

export default function Maintenance() {

  return (
    <Layout>
        <Head>
            <title>Todo 10 - Maintenance</title>
        </Head>
      <div className="my-40"/>
      <FirstSection/>
      <div className="section container-full">
        <BenefitsSection benefits={benefits}/>
      </div>
      <div className="section container">
        <Stepper initialStep={maintenanceOptions}/>
      </div>
      <div className="my-60"/>
    </Layout>
  )
}