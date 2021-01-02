import Layout from '../components/Layout'
import Stepper from '../components/Stepper';
import initialStep from '../data/pricing/steps'

export default function TestPage() {

  return (
    <Layout>
      <div className="my-40"/>
      <div className="section max-w-lg mx-auto">
        <div className="text-primary text-center font-bold text-2xl">
          Pricing
        </div>
        <div className="text-center text-primary">
          Duis non elit accumsan, dignissim libero et, facilisis est. Vestibulum ante ipsum primis in faucibus orci luctus.
        </div>
      </div>
      <div className="section container">
        <Stepper initialStep={initialStep}/>
      </div>
      <div className="my-60"/>
    </Layout>
  )
}