import { paths } from './routes'

const hostingFaqs = [
  {
    key: '1',
    title: 'What’s managed hosting - and do I need it?',
    desc: 'At Todo10, we only offer managed hosting, because we believe it’s absolutely 100% what’s best for our clients.\nManaged hosting means a team that helps you look after your servers, do your thing and deal with whatever comes your way. '
  },
  {
    key: '2',
    title: 'How long will it take to set up my account?',
    desc: 'New hosting account purchases are activated the same day, typically within minutes of purchase.\nCustom Dedicated Server configs can take up to 1-2 business days to complete deployment.'
  },
  {
    key: '3',
    title: 'Do you have an online control panel?',
    desc: 'All our hosting plans include cPanel control panel.'
  },
  {
    key: '4',
    title: 'Do you monitor your servers?',
    desc: 'Yes. We monitor our servers and your websites 24 hours a day, 7 days a week, 365 days a year.'
  },
  {
    key: '5',
    title: 'Can I upgrade my hosting plan at a later stage?',
    desc: 'Yes, all accounts can be upgraded.'
  }
]
const generalFaqs = [
  {
    key: '1',
    title: 'What forms of payment do you accept?',
    desc: 'We accept Visa, MasterCard, American Express, PayPal, Bank Transfer and Bitcoins (BTC).'
  },
  {
    key: '2',
    title: 'What are your hours of Technical Support?',
    desc: 'Phone, email, and chat support is available 24 hours a day, 7 days a week, 365 days a year.'
  },
  {
    key: '3',
    title: 'Do you offer a Money Back guarantee?',
    desc: 'Your satisfaction is our top priority, and we’re confident you’ll be pleased with our services. Still, if you are not satisfied, Hosting services billed on 1-month terms are eligible for 30 day money back guarantee period.'
  },
  {
  key: '4',
    title: 'How long has Todo10 been in business?',
    desc: 'Todo10 has been hosting shared accounts since our inception in 2007. '
}
]

const faqs = {
  [paths.HOME]: generalFaqs,
  [paths.SERVICES]: generalFaqs,
  [paths.HOSTING]: hostingFaqs,
  [paths.MAINTENANCE]: generalFaqs,
  [paths.WORDPRESS]: generalFaqs,
  [paths.XENFORO]: generalFaqs,
  [paths.PERSONALIZED]: generalFaqs,
  [paths.PRICING]: generalFaqs,
  [paths.ABOUT_US]: generalFaqs,
  [paths.PRIVACY_POLICY]: generalFaqs,
  [paths.ACCEPTABLE_USE_POLICY]: generalFaqs,
  [paths.TERMS_AND_CONDITIONS]: generalFaqs

}

export default faqs