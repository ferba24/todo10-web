import { Select, Option } from './index';
import RadioCard from '../RadioCard'
import RadioCircle from '../RadioCircle'
import { Content } from '../Card'
import windowIcon from '../../public/icons/window.svg'
import notebook from '../../public/icons/notebook.svg'

export default {
  title: 'Example/Select',
  component: Select
};

const Template = (args) => (
  <Select {...args}>
    <Option value="a">
      {props => (
        <div {...props}>
          Selected? {props.checked.toString()}
        </div>
      )}
    </Option>
    <Option value="b">
      {props => (
        <div {...props}>
          Selected? {props.checked.toString()}
        </div>
      )}
    </Option>
  </Select>
)

export const Default = Template.bind({});
Default.args = {
};

const TemplateCards = (args) => (
  <div className="flex space-x-6 mt-8 mx-auto max-w-xl">
    <Select {...args}>
      <Option value="a">
        {props => (
          <RadioCard className="w-6/12" {...props}>
            <Content
              icon={notebook}
              title="Maintenance plans"
              desc="An intelligent option for your services."
            />
          </RadioCard>
        )}
      </Option>
      <Option value="b">
        {props => (
          <RadioCard className="w-6/12" {...props}>
            <Content
              icon={windowIcon}
              title="Hosting plans 🔥"
              desc="High-performance web hosting plans."
            />
          </RadioCard>
        )}
      </Option>
    </Select>
  </div>
)

export const Cards = TemplateCards.bind({});
Cards.args = {
  
};

const TemplateRadio = (args) => (
  <Select {...args}>
    <Option value="a">
      {props => (
        <div
          {...props}
          className="flex items-center cursor-pointer text-primary my-2"
        >
          <RadioCircle checked={props.checked} className="mr-2"/>
          Option 1
        </div>
      )}
    </Option>
    <Option value="b">
      {props => (
        <div
          {...props}
          className="flex items-center cursor-pointer text-primary my-2"
        >
          <RadioCircle checked={props.checked} className="mr-2"/>
          Option 1
        </div>
      )}
    </Option>
  </Select>
)

export const Radio = TemplateRadio.bind({});
Radio.args = {
};

