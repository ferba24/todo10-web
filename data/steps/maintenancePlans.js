import DefaultLink from "../../components/DefaultLink"

const annuallyList = [
  'All the above plus:',
  'Real Time Monitoring',
  '24/7 Unlimited Support',
  'Save 20% 🔥',

]

const quarterlyList = [
  'Real Time Monitoring',
  '24/7 Unlimited Support',
  <DefaultLink url="#benefits">All the benefits included</DefaultLink>
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
  wordpress: getMaintenancePlans('https://clientarea.todo10.com/cart.php?a=add&pid=45&billingcycle=annually', 'https://clientarea.todo10.com/cart.php?a=add&pid=45&billingcycle=quarterly'),
  xenforo: getMaintenancePlans('https://clientarea.todo10.com/cart.php?a=add&pid=44&billingcycle=annually', 'https://clientarea.todo10.com/cart.php?a=add&pid=44&billingcycle=quarterly')
}

export default maintenancePlans