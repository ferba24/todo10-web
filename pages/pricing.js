import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader/PageHeader';
import Stepper from '../components/Stepper';
import initialStep from '../data/steps'
import Head from "next/head";

export default function Pricing() {

  return (
    <Layout>
        <Head>
            <title>Todo 10 - Pricing</title>
        </Head>
      <div className="my-40"/>
      <div className="section container">
        <PageHeader
          title="Pricing"
          desc="For Individual and Companies. Whether you're amateur or a company, there's a plan for you."
        />
      </div>
      <div className="section container-medium">
        <Stepper initialStep={initialStep}/>
      </div>
      <div className="my-60"/>
    </Layout>
  )
}