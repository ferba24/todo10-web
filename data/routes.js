import Button from '../components/Button'

const devices = '/icons/devices.svg'
const settings = '/icons/settings.svg'
const windows = '/icons/windows.svg'
const wordpress = '/icons/wordpress-small.svg'
const xenforo = '/icons/xenforo-small.svg'

const routes = [
  {
    label: 'Services',
    path: '/services',
    subItems: [
      {
        label: 'Hosting plans 🔥',
        path: '/hosting',
        icon: devices,
        desc: 'High-performance web hosting plans.'
      },
      {
        label: 'Maintenance plans',
        path: '/maintenance',
        icon: windows,
        desc: 'Lorem ipsum dolor sit amet, consectetur.'
      },
      {
        label: 'Wordpress services',
        path: '/wordpress',
        icon: wordpress,
        desc: 'Themes, plugins, hosting, we do it all!'
      },
      {
        label: 'Xenforo services',
        path: '/xenforo',
        icon: xenforo,
        desc: 'Migration, tunning, addons, styles and more.'
      },
      {
        label: 'Personalized Services',
        path: '/personalized',
        icon: settings,
        desc: 'SEO, Web Design, Dedicated services, everything you need.'
      }
    ]
  },
  {
    label: 'Pricing',
    path: '/pricing'
  },
  {
    label: 'About us',
    path: '/about-us'
  },
]

export default routes

export const cto = {
  label: <Button>Get a Quote</Button>,
  path: '/get-a-quote',
}