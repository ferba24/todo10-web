import Button from '../components/Button'
import devices from '../public/icons/devices.svg'
import settings from '../public/icons/settings.svg'
import windows from '../public/icons/windows.svg'
import wordpress from '../public/icons/wordpress-small.svg'
import xenforo from '../public/icons/xenforo-small.svg'

const routes = [
  {
    label: 'Services',
    path: '/services',
    subItems: [
      {
        label: 'Hosting plans 🔥',
        path: '/hosting-plans',
        icon: devices
      },
      {
        label: 'Maintenance plans',
        path: '/maintenance-plans',
        icon: windows
      },
      {
        label: 'Wordpress services',
        path: '/wordpress-services',
        icon: wordpress
      },
      {
        label: 'Xenforo services',
        path: '/xenforo-services',
        icon: xenforo
      },
      {
        label: 'Personalized Services',
        path: '/personalized-services',
        icon: settings
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