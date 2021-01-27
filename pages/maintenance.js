import Layout from '../components/Layout'
import BenefitsSection from '../components/BenefitsSection'
import Stepper from '../components/Stepper';
import { maintenanceOptions } from '../data/steps'
import benefits from '../data/maintenance/benefits'
import FeatureHighlight from '../components/FeatureHighlight'
import { paths } from '../data/routes';

const FirstSection = () => (
  <div className="section container-small">
    <FeatureHighlight
      image="/icons/laptop.svg"
      title={<>What <span className="text-orange">maintenance plan</span> means?</>}
      desc="We’ll do all the tech work and take care of the issues so you don’t have to. Many customers need help with their website because they don’t have the time or knowledge to manage it properly and that’s where we come in. We have the expertise and experience to effectively manage your site for you."
      link={paths.MAINTENANCE}
      linkLabel="Get mine"
    />
  </div>
)

export default function Maintenance() {

  return (
    <Layout>
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