import Layout from '../components/Layout'
import BenefitsSection from '../components/BenefitsSection'
import Stepper from '../components/Stepper';
import { hostingOptions } from '../data/steps'
import benefits from '../data/hosting/benefits'
import FeatureHighlight from '../components/FeatureHighlight/FeatureHighlight';
import Head from "next/head";
import useScrollHere from '../lib/useScrollHere';
import { useRef } from 'react';
import { paths } from '../data/routes';

export default function Hosting() {

  const stepRef = useRef(null)
  const scrollToStep = useScrollHere(stepRef, 150)

  return (
    <Layout>
        <Head>
            <title>Todo 10 - Web Hosting</title>
        </Head>
      <div className="my-40"/>
      <div className="section container-small">
        <FeatureHighlight
          image="/icons/server.svg"
          title={<>Outstanding <span className="text-orange">Web Hosting Plans</span></>}
          desc={<>Providing reliability and security for your business with high-quality hosting.<br />Full managed optimized hosting 10x faster than competitors.</>}
          link={paths.HOSTING}
          onLinkClicked={scrollToStep}
          linkLabel="Get Started"
        />
      </div>
      <div className="section container-full">
        <BenefitsSection benefits={benefits}/>
      </div>
      <div className="section container" ref={stepRef}>
        <Stepper initialStep={hostingOptions}/>
      </div>
      <div className="my-80"/>
    </Layout>
  )
}