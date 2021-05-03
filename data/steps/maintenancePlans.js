import DefaultLink from "../../components/DefaultLink/DefaultLink"

const annuallyList = [
  'Real Time Monitoring',
  '24/7 Unlimited Support',
  'Save 20% 🔥',
  'All the benefits included'
]

const quarterlyList = [
  'Real Time Monitoring',
  '24/7 Unlimited Support',
  <><DefaultLink url="#benefits">All the benefits included</DefaultLink></>
]

const getMaintenancePlans = (annuallyLink, quarterlyLink) => [
  {
    value: 'annually',
    title: 'BILLED ANNUALLY',
    price: 99.93,
    desc: 'per month',
    list: annuallyList,
    primary: true,
    ribbon: 'Save 20%',
    url: annuallyLink
  },
  {
    value: 'quarterly',
    title: 'BILLED QUARTERLY',
    price: 119.93,
    desc: 'per month',
    list: quarterlyList,
    url: quarterlyLink
  }
]

const maintenancePlans = {
  wordpress: getMaintenancePlans('https://link_wordpress_annually', 'https://link_wordpress_quarterly'),
  xenforo: getMaintenancePlans('https://link_xenforo_annually', 'https://link_xenforo_quarterly')
}

export default maintenancePlans