import Radio from './index'
import { Content } from '../Card'
import windowIcon from '../../public/icons/window.svg'
import notebook from '../../public/icons/notebook.svg'
import wordpress from '../../public/icons/wordpress.svg'
import xenforo from '../../public/icons/xenforo.svg'

export default {
  title: 'Example/Radio',
  component: Radio,
};

const cards = (
  <>
    <Radio.Card className="w-6/12" value="a">
      <Content
        icon={notebook}
        title="Maintenance plans"
        desc="An intelligent option for your services."
      />
    </Radio.Card>
    <Radio.Card className="w-6/12" value="c">
      <Content
        icon={windowIcon}
        title="Hosting plans 🔥"
        desc="High-performance web hosting plans."
      />
    </Radio.Card>
  </>
)

const Template = (args) => (
  <Radio.Group {...args}/>
);

export const Card = Template.bind({});
Card.args = {
  className: 'flex space-x-6 mt-8 mx-auto max-w-xl',
  children: cards
};

const MiniContent = ({image, name}) => (
  <div className="flex items-center justify-center">
    <img src={image} className="mr-3"/>
    <div className="font-bold text-lg">{name}</div>
  </div>
)

const smallCards = (
  <>
    <Radio.Chip
      noRadio
      className="w-6/12"
      value="a"
    >
      <MiniContent image={wordpress} name="Wordpress"/>
    </Radio.Chip>
    <Radio.Chip
      noRadio
      className="w-6/12"
      value="c"
    >
      <MiniContent image={xenforo} name="XenForo"/>
    </Radio.Chip>
  </>
)

export const CardSmall = Template.bind({});
CardSmall.args = {
  className: 'flex space-x-3 mt-8 mx-auto max-w-md bg-gray-200 p-2 rounded-xl',
  children: smallCards
};