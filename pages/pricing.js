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
          desc="Complete these steps and submit the form, the data is not going to be sent anywhere"
        />
      </div>
      <div className="section container">
        <Stepper initialStep={initialStep}/>
      </div>
      <div className="my-60"/>
    </Layout>
  )
}