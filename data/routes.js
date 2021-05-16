import Button from '../components/Button'

const devices = '/icons/devices.svg'
const settings = '/icons/settings.svg'
const windows = '/icons/windows.svg'
const wordpress = '/icons/wordpress-small.svg'
const xenforo = '/icons/xenforo-small.svg'

export const paths = {
  HOME: '/en/',
  SERVICES: '/en/services',
  HOSTING: '/en/web-hosting',
  MAINTENANCE: '/en/maintenance-plans',
  WORDPRESS: '/en/wordpress-services',
  XENFORO: '/en/xenforo-services',
  PERSONALIZED: '/en/personalized-services',
  PRICING: '/en/pricing',
  ABOUT_US: '/en/about-us',
  GET_A_QUOTE: '/en/get-a-quote',
  PRIVACY_POLICY: '/en/privacy-policy',
  TERMS_AND_CONDITIONS: '/en/terms-and-conditions',
  ACCEPTABLE_USE_POLICY: '/en/acceptable-use-policy'
}

export const services = [
  {
    label: 'Hosting plans 🔥',
    path: paths.HOSTING,
    icon: devices,
    desc: 'High-performance web hosting.'
  },
  {
    label: 'Maintenance plans',
    path: paths.MAINTENANCE,
    icon: windows,
    desc: 'We maintain your platforms or websites for a fixed price.'
  },
  {
    label: 'Wordpress services',
    path: paths.WORDPRESS,
    icon: wordpress,
    desc: 'Updates, themes, hardening, support. We do it all!'
  },
  {
    label: 'XenForo services',
    path: paths.XENFORO,
    icon: xenforo,
    desc: 'Custom addons, styles, migrations, security and more.'
  },
  {
    label: 'Personalized Services',
    path: paths.PERSONALIZED,
    icon: settings,
    desc: 'Dedicated Servers, SEO, Web Design, custom services, anything you need.'
  }
]

const routes = [
  {
    label: 'Services',
    path: paths.SERVICES,
    subItems: services
  },
  {
    label: 'Pricing',
    path: paths.PRICING,
  },
  {
    label: 'About us',
    path: paths.ABOUT_US,
  },
]

export default routes

export const cto = {
  label: <Button>Get a Quote</Button>,
  path: paths.GET_A_QUOTE,
}