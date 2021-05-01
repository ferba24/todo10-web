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

const getDefaultPlans = (annuallyPrice, annuallyUrl, monthlyPrice, monthlyUrl) => [
  {
    value: 'annually',
    title: 'BILLED ANNUALLY',
    price: annuallyPrice,
    desc: 'per month',
    list: annuallyList,
    primary: true,
    ribbon: 'Save 20%',
    url: annuallyUrl,
  },
  {
    value: 'quarterly',
    title: 'BILLED MONTHLY',
    price: monthlyPrice,
    desc: 'per month',
    list: monthlyList,
    url: monthlyUrl,
  }
]

const plansStep = options => ({
  name: 'plansStep',
  title: 'Select the best plan for you',
  type: 'card',
  options,
  className: 'flex flex-nowrap overflow-x-auto justify-start sm:justify-center'
})


const plansData = [
  {
    label: '12 GB',
    value: '12GB',
    nextStep: plansStep(getDefaultPlans(20.83, 'https://annually_plan_here', 24.99, 'https://monthly_plan_here'))
  },
  {
    label: '24 GB',
    value: '24GB',
    nextStep: plansStep(getDefaultPlans(33.32, 'https://annually_plan_here.com', 39.99, 'https://monthly_plan_here.com'))
  },
  {
    label: '39 GB',
    value: '39GB',
    nextStep: plansStep(getDefaultPlans(74.16, 'https://annually_plan_here.com', 89.99, 'https://monthly_plan_here.com'))
  },
  {
    label: '75 GB',
    value: '75GB',
    nextStep: plansStep(getDefaultPlans(149.99, 'https://annually_plan_here.com', 179.99, 'https://monthlylly_plan_here.com'))
  },
]

export default plansData