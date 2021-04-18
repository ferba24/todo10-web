const annuallyList = [
  'Fully Managed',
  '24/7 Support',
  'Hourly Backups',
  'Save 20% 🔥',
  'All benefits included'
]

const monthlyList = [
  'Fully Managed',
  '24/7 Support',
  'Hourly Backups',
  'Save 20% 🔥',
  'All benefits included'
]

const getDefaultPlans = (annuallyPrice, monthlyPrice) => [
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
    title: 'BILLED MONTHLY',
    price: monthlyPrice,
    desc: 'per month',
    list: monthlyList
  }
]

const plans = {
  '12': getDefaultPlans(20.83, 24.99),
  '24': getDefaultPlans(33.32, 39.99),
  '39': getDefaultPlans(74.16, 89.99),
  '75': getDefaultPlans(149.99, 179.99),
}

export default function getPlans(diskSpace) {
  return plans[diskSpace]
}