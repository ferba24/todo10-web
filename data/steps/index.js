/**
 * Steps for the app
 * Feel free to separate these into smaller files if necessary.
 * 
 * Brief explanation for step props:
 * `name` name of the property in the object that collects the user choices.
 * `type` Available types: 'card', 'contactForm', 'select', 'chip', 'radioCard'.
 * `options` Array of options for the user to choose.
 * `title` Title to be shown above the step.
 * `desc` Description to be shown below the title.
 */


import getPlans from './getPlans'

const wordpress = '/icons/wordpress.svg'
const xenforo = '/icons/xenforo.svg'
const windowIcon = '/icons/window.svg'
const notebook = '/icons/notebook.svg'
const servicesIcon = '/icons/services.svg'
const personalizedIcon = '/icons/personalized.svg'

const seoIcon = '/icons/seo.svg'
const designIcon = '/icons/design.svg'
const computerIcon = '/icons/computer.svg'
const pencilIcon = '/icons/pencil.svg'

const getPlansStep = diskSpace => ({
  name: 'plansStep',
  title: 'Select the best plan for you',
  type: 'card',
  options: getPlans(diskSpace),
  className: 'flex flex-nowrap overflow-x-auto justify-start sm:justify-center'
})

/**
 * This is a normal step, but has a `final` prop set as `true`.
 * This means that this step is the last one, so the stepper will show
 * a result after its completion.
 */
const finalForm = {
  name: 'finalForm',
  title: 'Tell us what you need',
  desc: 'We will send you a personalized quote really fast!',
  type: 'contactForm',
  final: true
}

/**
 * This step, like others, has an `options` array. Every option has
 * a `nextStep` prop, thus the next step will depend on the user choice.
 */
const diskSpaceOptions = {
  name: 'diskSpace',
  title: 'Disk space',
  type: 'select',
  options: [
    {label: 'Custom', value: 'custom', nextStep: finalForm},
    {label: '12 GB', value: '12GB', nextStep: getPlansStep(12)},
    {label: '24 GB', value: '24GB', nextStep: getPlansStep(24)},
  ]
}

export const hostingOptions = {
  name: 'platform',
  title: 'Choose your platform',
  type: 'chip',
  options: [
    {
      value: "wordpress",
      image: wordpress,
      title: 'Wordpress',
      nextStep: diskSpaceOptions
    },
    {
      value: "xenforo",
      image: xenforo,
      title: 'XenForo',
      nextStep: diskSpaceOptions
    }
  ]
}

export const maintenanceOptions = {
  name: 'platform',
  title: 'Choose your platform',
  type: 'chip',
  options: [
    {
      value: "wordpress",
      image: wordpress,
      title: 'Wordpress',
      nextStep: getPlansStep(12)
    },
    {
      value: "xenforo",
      image: xenforo,
      title: 'XenForo',
      nextStep: getPlansStep(12)
    }
  ]
}

/**
 * This step has a "global" `nextStep`, this means that no matter what option the user
 * chooses, the next step will be the same.
 */
export const personalizedStep = {
  name: 'personalizedOption',
  title: 'Choose one or more',
  type: 'radioCard',
  multiple: true,
  nextStep: finalForm,
  options: [
    {
      value: 'seo',
      icon: seoIcon,
      title: 'SEO',
      desc: 'If you are looking to command your market online, you need a comprehensive SEO strategy that delivers results.',
    },
    {
      value: 'webDesign',
      icon: designIcon,
      title: 'Web Design',
      desc: 'Expert website design that helps you stand out from your competitors and engage with your audience.',
    },
    {
      value: 'dedicatedServices',
      icon: computerIcon,
      title: 'Dedicated Servers',
      desc: 'Optimized, harden and fully managed servers. Let us know your needs.',
    },
    {
      value: 'somethingElse',
      icon: pencilIcon,
      title: 'Something Else',
      desc: 'More than 10 years of expertise give us the confidence to take on any project you have in mind.',
    }
  ]
}

const initialStep = {
  name: 'general',
  title: 'Select what are you looking for',
  type: 'radioCard',
  options: [
    {
      value: 'maintenancePlans',
      icon: notebook,
      title: 'Maintenance plans',
      desc: 'An intelligent option for your services.',
      nextStep: maintenanceOptions
    },
    {
      value: 'hostingPlans',
      ribbon: 'Most sold!',
      icon: windowIcon,
      title: 'Hosting plans 🔥',
      desc: 'High-performance web hosting plans.',
      nextStep: hostingOptions
    },
    {
      value: 'services',
      icon: servicesIcon,
      title: 'Services',
      desc: 'Xenforo and Wordpress available!',
      nextStep: finalForm
    },
    {
      value: 'personalizedServices',
      icon: personalizedIcon,
      title: 'Personalized Services',
      desc: 'SEO, Web Design, Dedicated services, everything you need.',
      nextStep: personalizedStep
    }
  ]
}

export default initialStep