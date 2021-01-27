import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader'
import WithSend from '../components/ContactForm/WithSend'

export default function GetAQuote() {

  return (
    <Layout>
      <div className="my-40"/>
      <div className="section container">
        <PageHeader
          title={<span className="text-orange">Get a Quote</span>}
          desc="Whatever you need can be done, write us blabah, we are great, blablah."
        />
      </div>
      <div className="w-11/12 mx-auto">
        <WithSend>
          {({send, sending}) => (
            <ContactForm
              extended
              buttonRight
              buttonPrimary
              buttonLabel="Send"
              onFinish={send}
              sending={sending}
            />
          )}
        </WithSend>
      </div>
      <div className="my-60"/>
    </Layout>
  )
}