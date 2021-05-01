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

const maintenancePlans = [
  {
    value: 'annually',
    title: 'BILLED ANNUALLY',
    price: 99.93,
    desc: 'per month',
    list: annuallyList,
    primary: true,
    ribbon: 'Save 20%',
    url: 'https://google.com'
  },
  {
    value: 'quarterly',
    title: 'BILLED QUARTERLY',
    price: 119.93,
    desc: 'per month',
    list: quarterlyList,
    url: 'https://google.com'
  }
]
export default maintenancePlans