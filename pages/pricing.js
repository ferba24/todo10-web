import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader/PageHeader';
import Stepper from '../components/Stepper';
import initialStep from '../data/steps'

export default function Pricing() {

  return (
    <Layout>
      <div className="my-40"/>
      <div className="section container">
        <PageHeader
          title="Pricing"
          desc="Duis non elit accumsan, dignissim libero et, facilisis est. Vestibulum ante ipsum primis in faucibus orci luctus."
        />
      </div>
      <div className="section container">
        <Stepper initialStep={initialStep}/>
      </div>
      <div className="my-60"/>
    </Layout>
  )
}