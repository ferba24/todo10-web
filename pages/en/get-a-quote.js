import Layout from '../../components/Layout'
import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader'
import WithSend from '../../components/ContactForm/WithSend'
import Head from "next/head";

export default function GetAQuote() {

  return (
    <Layout>
        <Head>
            <title>Todo 10 - Get a Quote</title>
        </Head>
      <div className="my-40"/>
      <div className="section container">
        <PageHeader
          title={<span className="text-orange">How We Can Help You?</span>}
          desc="Let’s talk about your website or project. Send us a message and we will be in touch within one business day."
        />
      </div>
      <div className="w-11/12 mx-auto">
        <WithSend>
          {({send, sending}) => (
            <ContactForm
              extended
              buttonRight
              buttonPrimary
              buttonLabel="Send Message"
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