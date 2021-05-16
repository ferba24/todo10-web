import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import FeatureHighlight from '../../components/FeatureHighlight/FeatureHighlight';
// import List from '../components/List'
import ContactForm from '../../components/ContactForm';
import WithSend from '../../components/ContactForm/WithSend'
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// const list = [
//   'Teamwork',
//   'Proactive',
//   'Listen',
//   'Care'
// ] 

// const wheels = (
//   <img
//     src="/images/about-us-wheels.svg"
//     className="absolute z-0 max-w-none"
//     style={{maxWidth: '220%', left: '-40%'}}
//   />
// )
/*
const BlueSection = () => (
  <div className="section bg-blue py-20">
    <div className="container text-white">
      <FeatureHighlight
        image="/icons/pencil.svg"
        title="Our core values"
        desc={<List primary items={list}/>}
        imageStyle={{maxWidth: 170}}
        leftExtra={wheels}
      />
    </div>
  </div>
)
*/
const ContactSection = () => {

  return (
    <div className="section container relative">
      <a name="form" className="absolute -top-32" />
      <PageHeader
          title={<span className="text-orange">Let's do great things</span>}
          desc="We'd love to know about your amazing project!"
      />
      <WithSend>
        {({send, sending}) => (
          <ContactForm
            buttonRight
            buttonPrimary
            onFinish={send}
            sending={sending}
            buttonLabel="Send Message"
          />
        )}
      </WithSend>
    </div>  
  )
}

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
      <span>About</span>
      <img
        className="h-7 ml-4"
        style={{marginTop: 2}}
        src="/logo.svg"
        alt="Todo 10 about us"
      />
    </div>
  )

  const cloud = (
    <img
      src="/images/cloud.svg"
      className="absolute z-0 max-w-none bottom-32"
      style={{maxWidth: '220%', left: '-150%'}}
    />
  )

  return (
    <Layout>
        <Head>
            <title>Todo 10 - About Us</title>
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
          image="/icons/laptop.svg"
          title={<span className="text-orange">We transform ideas into success</span>}
          desc={<span>Whatever your needs, Todo10 will be able to meet them. Our staff is dynamic in its work, from troubleshooting to disaster recovery, project management to software design and implementation. We have a highly skilled development staff with broad experience in web hosting, web development and IT solutions. Our team can provide server administration services to fit any budget, and we can scale management solutions to your needs.</span>}
          leftExtra={cloud}
        />
      </div>
      <div className="section container">
        <FeatureHighlight
            image="/images/about-us.svg"
            title={<span className="text-orange">Our Mission</span>}
            desc={<span>We believe being first is a matter of chance and being the best and getting it right is what matters in our end. That's why we've created an ecosystem of services to help businesses grow better every day.<br /><br />Customers are at the forefront of everything we do and the reason we are excited to get up every day and head to work. We still work hard each day to provide a better experience than our competitors.</span>}
            reverse
        />
      </div>

      <div className="section container">
        <FeatureHighlight
          image="/images/spaceship-with-wheels.svg"
          title={<span className="text-orange">Our Story</span>}
          desc={<span>Many people have had a poor experience with a hosting company, you have probably had one too. It’s an industry which is easy to get started in but extremely hard to do well, and back in 2007 options were limited and not focused in forum platforms.<br /><br />
People wanted a hosting company that they could rely on to run their successful projects, so did Claudio. That’s how Todo10 started. One small server used to sell Shared Hosting with a focus on customer service and many sleepless nights.<br />
It worked. Customers started coming in and Todo10 quickly grew. More servers were purchased, the team expanded and the office moved. The rest they say is history, which really means over a decade of hard work, some lows and some big highs in a rapidly changing industry.<br /><br />
Being a small team allowed us to create stronger ties, trust and repeat customers. We feel involved, engaged and connected to the business when each of us has a higher level of responsibility and stake in it.
<br /><br />We know everyone wants to feel like they're special and being listened to so we really take your needs into consideration and quickly implement changes to your business or products that better serve your requests.

<br /></span>}
          reverse
        />
      </div>

      <ContactSection/>
      <div className="my-60"/>
    </Layout>
  )
}