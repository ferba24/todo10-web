import getPlans from './getPlans'
import ChipSelector from '../../components/ChipSelector'
import Select from '../../components/Select'
import NativeSelect from '../../components/NativeSelect'

import wordpress from '../../public/icons/wordpress.svg'
import xenforo from '../../public/icons/xenforo.svg'
import windowIcon from '../../public/icons/window.svg'
import notebook from '../../public/icons/notebook.svg'
import servicesIcon from '../../public/icons/services.svg'
import personalizedIcon from '../../public/icons/personalized.svg'

import seoIcon from '../../public/icons/seo.svg'
import designIcon from '../../public/icons/design.svg'
import computerIcon from '../../public/icons/computer.svg'
import pencilIcon from '../../public/icons/pencil.svg'

const getPlansStep = diskSpace => ({
  name: 'plansStep',
  title: 'Select the best plan for you',
  type: 'card',
  options: getPlans(diskSpace),
})


const finalForm = {
  name: 'finalForm',
  title: 'Tell us what you need',
  desc: 'We will send you a personalized quote really fast!',
  type: 'contactForm',
  final: true
}

const diskSpaceOptions = {
  name: 'diskSpace',
  title: 'Disk space',
  type: 'select',
  selector: NativeSelect,
  option: NativeSelect.Option,
  options: [
    {label: 'Custom', value: 'custom', nextStep: finalForm},
    {label: '12 GB', value: '12GB', nextStep: getPlansStep(12)},
    {label: '24 GB', value: '24GB', nextStep: getPlansStep(24)},
  ]
}

const hostingOptions = {
  name: 'platform',
  title: 'Choose your platform',
  type: 'chip',
  selector: ChipSelector,
  option: Select.Option,
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

const personalizedOptions = {
  name: 'personalizedOption',
  title: 'Choose one or more',
  type: 'radioCard',
  selector: Select,
  option: Select.Option,
  multiple: true,
  nextStep: finalForm,
  options: [
    {
      value: 'seo',
      icon: seoIcon,
      title: 'SEO',
      desc: 'Nullam ullamcorper euismod odio, vel efficitur urna venenatis in. ',
    },
    {
      value: 'webDesign',
      icon: designIcon,
      title: 'Web Design',
      desc: 'Nullam ullamcorper euismod odio, vel efficitur urna venenatis in.',
    },
    {
      value: 'dedicatedServices',
      icon: computerIcon,
      title: 'Dedicated Services',
      desc: 'Nullam ullamcorper euismod odio, vel efficitur urna venenatis in.',
    },
    {
      value: 'somethingElse',
      icon: pencilIcon,
      title: 'Something Else',
      desc: 'Nullam ullamcorper euismod odio, vel efficitur urna venenatis in.',
    }
  ]
}

const initialStep = {
  name: 'general',
  title: 'Select what are you looking for',
  type: 'radioCard',
  selector: Select,
  option: Select.Option,
  options: [
    {
      value: 'maintenancePlans',
      icon: notebook,
      title: 'Maintenance plans',
      desc: 'An intelligent option for your services.',
      nextStep: finalForm
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
      nextStep: personalizedOptions
    }
  ]
}

export default initialStep