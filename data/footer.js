import DefaultLink from "../components/DefaultLink"

export const topItems = [
  {
    key: 'email',
    icon: '/icons/mail.svg',
    title: 'support@todo10.com',
    desc: <>For any doubt you have please <DefaultLink url="/about-us#form">Contact Us</DefaultLink>. Your needs are our priorities</>
  },
  {
    key: 'chat',
    icon: '/icons/message.svg',
    title: 'Chat with us...',
    desc: <><DefaultLink url="https://go.crisp.chat/chat/embed/?website_id=64f36307-81ed-48ba-b126-fe0272becd73">Click here</DefaultLink> and get assistance from our team of experts</>
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
      label: <>Already a client? <DefaultLink url="https://clientarea.todo10.com/clientarea.php">Client Area</DefaultLink></>,
      key: 'client-area',
      style: {marginTop: 'auto'}
    }
  ]
}