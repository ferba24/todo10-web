import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import FeatureHighlight from '../components/FeatureHighlight/FeatureHighlight';
import List from '../components/List'
import ContactForm from '../components/ContactForm';
import WithSend from '../components/ContactForm/WithSend'

const list = [
  'First point',
  'What about other',
  'Here goes another',
  'Other one'
] 

const wheels = (
  <img
    src="/images/about-us-wheels.svg"
    className="absolute z-0 max-w-none"
    style={{maxWidth: '220%', left: '-40%'}}
  />
)

const BlueSection = () => (
  <div className="section bg-blue py-20">
    <div className="container text-white">
      <FeatureHighlight
        image="/icons/pencil.svg"
        title="Something important"
        desc={<List primary items={list}/>}
        imageStyle={{maxWidth: 170}}
        leftExtra={wheels}
      />
    </div>
  </div>
)

const ContactSection = () => {

  return (
    <div className="section container">
      <a name="form" />
      <h3 className="text-orange text-center mb-8">
        Contact us!
      </h3>
      <WithSend>
        {({send, sending}) => (
          <ContactForm
            buttonRight
            buttonPrimary
            onFinish={send}
            sending={sending}
            buttonLabel="Send"
          />
        )}
      </WithSend>
    </div>  
  )
}

export default function AboutUs() {

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
      <div className="my-40"/>
      <div className="section container">
        <PageHeader
          title={headerTitle}
          desc="Our mission is to provide outstanding customer service and support that is second to none."
        />
      </div>
      <div className="section container">
        <FeatureHighlight
          image="/images/about-us.svg"
          title={<span className="text-orange">Always Champions for our Customers</span>}
          desc="Our customers take first priority in every decision we make. And every day, we share our values of authenticity and reliability with the people we serve. We feel putting people first isn’t just the right way to do business, it’s the right thing, period."
          leftExtra={cloud}
        />
      </div>
      <div className="section container">
        <FeatureHighlight
          image="/images/spaceship-with-wheels.svg"
          title={<span className="text-orange">Always Clear and Honest</span>}
          desc="We strive to build a culture of integrity. All our interactions are honest, action-oriented, and decisive, whether they’re with a customer or a co-worker. We deliver authenticity and transparency in our promotions, the best prices on the market, and no unwanted upsells. We will never stop searching for the best ways to grow from our successes and learn from our failures."
          reverse
        />
      </div>
      <BlueSection/>
      <ContactSection/>
      <div className="my-60"/>
    </Layout>
  )
}