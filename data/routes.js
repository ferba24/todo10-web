import Button from '../components/Button'

const devices = '/icons/devices.svg'
const settings = '/icons/settings.svg'
const windows = '/icons/windows.svg'
const wordpress = '/icons/wordpress-small.svg'
const xenforo = '/icons/xenforo-small.svg'

export const paths = {
  SERVICES: '/services',
  HOSTING: '/hosting',
  MAINTENANCE: '/maintenance',
  WORDPRESS: '/wordpress',
  XENFORO: '/xenforo',
  PERSONALIZED: '/personalized',
  PRICING: '/pricing',
  ABOUT_US: '/about-us',
  GET_A_QUOTE: '/get-a-quote',
}

export const services = [
  {
    label: 'Hosting plans 🔥',
    path: paths.HOSTING,
    icon: devices,
    desc: 'High-performance web hosting plans.'
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
    desc: 'Themes, plugins, hosting, we do it all!'
  },
  {
    label: 'Xenforo services',
    path: paths.XENFORO,
    icon: xenforo,
    desc: 'Migration, tunning, addons, styles and more.'
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