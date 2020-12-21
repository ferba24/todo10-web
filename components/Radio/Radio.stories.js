import Radio from './index'
import { Content } from '../Card'
import windowIcon from '../../public/icons/window.svg'
import notebook from '../../public/icons/notebook.svg'

export default {
  title: 'Example/Radio',
  component: Radio,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (
  <Radio.Group {...args} className="flex space-x-6 mt-8 mx-auto w-5/12">
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
  </Radio.Group>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'a',
};