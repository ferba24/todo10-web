const annuallyList = [
  'Real Time Monitoring',
  '24/7 Support',
  'Save 20% 🔥',
  'Maintenance block'
]

const quarterlyList = [
  'Real Time Monitoring',
  '24/7 Support',
  'Daily Backups',
  'Maintenance block'
]

const maintenancePlans = [
  {
    value: 'annually',
    title: 'BILLED ANNUALLY',
    price: 99.93,
    desc: 'per month',
    list: annuallyList,
    primary: true,
    ribbon: 'Save 20%'
  },
  {
    value: 'quarterly',
    title: 'BILLED QUARTERLY',
    price: 119.93,
    desc: 'per month',
    list: quarterlyList
  }
]
export default maintenancePlans