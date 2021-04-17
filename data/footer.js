import Link from 'next/link'

const DefaultLink = ({url = '/', children}) => (
  <Link href={url} prefetch={false}>
    <a style={{color: '#F79E8C'}} className="underline">
      {children}
    </a>
  </Link>
)

export const topItems = [
  {
    key: 'email',
    icon: '/icons/mail.svg',
    title: 'support@todo10.com',
    desc: <span>For any doubt you have please <DefaultLink url="/about-us#form">Contact Us</DefaultLink>. Your needs are our priorities</span>
  },
  {
    key: 'chat',
    icon: '/icons/message.svg',
    title: 'Chat with us...',
    desc: <span><DefaultLink url="https://go.crisp.chat/chat/embed/?website_id=64f36307-81ed-48ba-b126-fe0272becd73">Click here</DefaultLink> and get assistance from our team of experts</span>
  },
  {
    key: 'phone',
    icon: '/icons/phone.svg',
    title: '+54 9 3496525275',
    desc: 'Our lines are always open for you to call us.',
  }
]

export const pricingItems = {
  title: 'Pricing',
  items: [
    {
      label: 'See the options',
      path: '/pricing'
    },
    {
      label: 'Get a Quote',
      path: '/get-a-quote'
    }
  ]
}

export const aboutUsItems = {
  title: 'About Us',
  items: [
    {
      label: 'Our Story',
      path: '/about-us'
    },
    {
      label: 'Contact us',
      path: '/about-us#form'
    },
    {
      label: <span>Already a client? <a style={{color: '#F79E8C'}} className="underline" href="https://clientarea.todo10.com/clientarea.php">Client Area</a></span>,
      path: '/',
      style: {marginTop: 'auto'}
    }
  ]
}