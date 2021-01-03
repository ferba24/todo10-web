const annuallyList = [
  'Real Time Monitoring',
  '24/7 Support',
  'Daily Backups',
  'Save 20% 🔥',
  'All features included'
]

const quarterlyList = [
  'Real Time Monitoring',
  '24/7 Support',
  'Daily Backups',
  'All features included'
]

const getDefaultPlans = (annuallyPrice, quarterlyPrice) => [
  {
    value: 'annually',
    title: 'BILLED ANNUALLY',
    price: annuallyPrice,
    desc: 'per month',
    list: annuallyList,
    primary: true,
    ribbon: 'Save 20%'
  },
  {
    value: 'quarterly',
    title: 'BILLED QUARTERLY',
    price: quarterlyPrice,
    desc: 'per month',
    list: quarterlyList
  }
]

const plans = {
  '12': getDefaultPlans(99.93, 119.93),
  '24': getDefaultPlans(139.93, 159.93),
}

export default function getPlans(diskSpace) {
  return plans[diskSpace]
}