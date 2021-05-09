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
    '12': [20.83, 'https://clientarea.todo10.com/cart.php?a=add&pid=46&billingcycle=annually', 24.99, 'https://clientarea.todo10.com/cart.php?a=add&pid=46&billingcycle=monthly'],
    '24': [33.32, 'https://clientarea.todo10.com/cart.php?a=add&pid=48&billingcycle=annually', 39.99, 'https://clientarea.todo10.com/cart.php?a=add&pid=48&billingcycle=monthly'],
    '39': [74.16, 'https://clientarea.todo10.com/cart.php?a=add&pid=51&billingcycle=annually', 89.99, 'https://clientarea.todo10.com/cart.php?a=add&pid=51&billingcycle=monthly'],
    '75': [149.99, 'https://clientarea.todo10.com/cart.php?a=add&pid=53&billingcycle=annually', 179.99, 'https://clientarea.todo10.com/cart.php?a=add&pid=53&billingcycle=monthly'],
  },
  xenforo: {
    '12': [20.83, 'https://clientarea.todo10.com/cart.php?a=add&pid=47&billingcycle=annually', 24.99, 'https://clientarea.todo10.com/cart.php?a=add&pid=47&billingcycle=monthly'],
    '24': [33.32, 'https://clientarea.todo10.com/cart.php?a=add&pid=49&billingcycle=annually', 39.99, 'https://clientarea.todo10.com/cart.php?a=add&pid=49&billingcycle=monthly'],
    '39': [74.16, 'https://clientarea.todo10.com/cart.php?a=add&pid=50&billingcycle=annually', 89.99, 'https://clientarea.todo10.com/cart.php?a=add&pid=50&billingcycle=monthly'],
    '75': [149.99, 'https://clientarea.todo10.com/cart.php?a=add&pid=52&billingcycle=annually', 179.99, 'https://clientarea.todo10.com/cart.php?a=add&pid=52&billingcycle=monthly'],
  }
}

const sizes = ['12', '24', '39', '75']

const getPlansData = platform => sizes.map(size => ({
  label: `${size} GB`,
  value: `${size}GB`,
  nextStep: plansStep(getDefaultPlans(...pricesAndUrlsByPlatform[platform][size]))
}))

export default getPlansData