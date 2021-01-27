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
      desc="Duis non elit accumsan, dignissim libero et, facilisis est. Vestibulum ante ipsum primis in faucibus orci luctus. Suspendisse ultrices ex rhoncus, vehicula magna at, tempor nunc. Curabitur libero ex, venenatis non lectus ut, feugiat molestie massa."
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