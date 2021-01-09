import Layout from '../components/Layout'
import BenefitsSection from '../components/BenefitsSection'
import Stepper from '../components/Stepper';
import { hostingOptions } from '../data/steps'
import benefits from '../data/maintenance/benefits'

export default function Hosting() {

  return (
    <Layout>
      <div className="my-40"/>
      <div className="section max-w-lg mx-auto">
        <div className="text-primary text-center font-bold text-2xl">
        maintenance
        </div>
        <div className="text-center text-primary">
          Duis non elit accumsan, dignissim libero et, facilisis est. Vestibulum ante ipsum primis in faucibus orci luctus.
        </div>
      </div>
      <div className="section container-full">
        <BenefitsSection benefits={benefits}/>
      </div>
      <div className="section container">
        <Stepper initialStep={hostingOptions}/>
      </div>
      <div className="my-60"/>
    </Layout>
  )
}