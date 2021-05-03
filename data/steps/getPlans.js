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

const pricesAndUrlsByPlatform = {
  wordpress: {
    '12': [20.83, 'https://wordpress_annually_plan', 24.99, 'https://wordpress_monthly_plan'],
    '24': [33.32, 'https://wordpress_annually_plan', 39.99, 'https://wordpress_monthly_plan'],
    '39': [74.16, 'https://wordpress_annually_plan', 89.99, 'https://wordpress_monthly_plan'],
    '75': [149.99, 'https://wordpress_annually_plan', 179.99, 'https://wordpress_monthly_plan'],
  },
  xenforo: {
    '12': [20.83, 'https://xenforo_annually_plan', 24.99, 'https://xenforo_monthly_plan'],
    '24': [33.32, 'https://xenforo_annually_plan', 39.99, 'https://xenforo_monthly_plan'],
    '39': [74.16, 'https://xenforo_annually_plan', 89.99, 'https://xenforo_monthly_plan'],
    '75': [149.99, 'https://xenforo_annually_plan', 179.99, 'https://xenforo_monthly_plan'],
  }
}

const sizes = ['12', '24', '39', '75']

const getPlansData = platform => sizes.map(size => ({
  label: `${size} GB`,
  value: `${size}GB`,
  nextStep: plansStep(getDefaultPlans(...pricesAndUrlsByPlatform[platform][size]))
}))

export default getPlansData