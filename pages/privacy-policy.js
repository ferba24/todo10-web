import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import FeatureHighlight from '../components/FeatureHighlight/FeatureHighlight';
// import List from '../components/List'
import ContactForm from '../components/ContactForm';
import WithSend from '../components/ContactForm/WithSend'
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function AboutUs() {

    const router = useRouter()

    useEffect(() => {
        const [, anchorName] = router.asPath.split('#')
        if(!anchorName) return
        const anchor = document.querySelector(`a[name=${anchorName}]`)
        if(!anchor) return
        const { top } = anchor.getBoundingClientRect()
        const targetTop = window.scrollY + top - 100
        window.scrollTo({top: targetTop , behavior: 'smooth'})
    }, [])

    const headerTitle = (
        <div className="flex items-center justify-center">
            <span>Privacy Statement</span>
        </div>
    )

    return (
        <Layout>
            <Head>
                <title>Todo 10 - Privacy Policy</title>
            </Head>
            <div className="my-40"/>
            <div className="section container">
                <PageHeader
                    title={headerTitle}
                    desc=""
                />
            </div>
            <div className="section container">
                <FeatureHighlight
                    title={<span className="text-orange">We are committed to protecting your privacy</span>}
                    desc={<span>We are committed to protecting your privacy
We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. This Policy indicates the type of processes that may result in data being collected about you. The purpose of this Privacy Policy to enable you to understand which personal identifying information ("PII", "Personal Information") of yours is collected, how and when we might use your information, who has access to this information, and how you can correct any inaccuracies in the information. To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our website.

Information Use
This information is used for billing and to provide service and support to our customers. We may also study this information to determine our customers needs and provide support for our customers. All reasonable precautions are taken to prevent unauthorised access to this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details. Todo10 may email its monthly newsletter to the primary contact e-mail on file, but customers are able to opt out of this newsletter at any time sending an email.

Compliance with Laws and Law Enforcement
We cooperate with government and law enforcement officials to enforce and comply with the law. We will disclose any information about Users upon valid request by government or law officials as we, in our sole discretion, believe necessary or appropriate to respond to claims and legal process (including without limitation subpoenas), to protect your property and rights, or the property and rights of a third party, to protect the safety of the public or any person, or stop activity we consider illegal or unethical.

Changes to this Policy
Any changes to our Privacy Policy will be placed here and will supersede this version of our Policy. We will take reasonable steps to draw your attention to any changes in our Policy. However, to be on the safe side, we suggest that you read this document each time you use the website to ensure that it still meets with your approval.

Contacting Us
If you have any questions about our Privacy Policy, or if you want to know what information we have collected about you, please email us at support@todo10.com. You can also correct any factual errors in that information or require us to remove your details from any list under our control.</span>}
                />
            </div>
            <div className="my-60"/>
        </Layout>
    )
}