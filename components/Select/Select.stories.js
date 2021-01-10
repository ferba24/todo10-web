import Select from './Select';
import RadioCard from '../RadioCard'
import RadioCircle from '../RadioCircle'
import windowIcon from '../../public/icons/window.svg'
import notebook from '../../public/icons/notebook.svg'

export default {
  title: 'Example/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'Value changed' },
    onOptionsChange: { action: 'Options changed' },
    onSelectedIndexChange: { action: 'Index changed' }
  }
};

const Template = (args) => (
  <Select {...args}>
    <Select.Option value="a">
      {props => (
        <div {...props}>
          Selected? {props.checked.toString()}
        </div>
      )}
    </Select.Option>
    <Select.Option value="b">
      {props => (
        <div {...props}>
          Selected? {props.checked.toString()}
        </div>
      )}
    </Select.Option>
  </Select>
)

export const Default = Template.bind({});
Default.args = {
};

const TemplateCards = (args) => (
  <div className="flex space-x-6 mt-8 mx-auto max-w-xl">
    <Select {...args}>
      <Select.Option value="a">
        {props => (
          <RadioCard className="w-6/12" {...props}>
            <RadioCard.Content
              icon={notebook}
              title="Maintenance plans"
              desc="An intelligent option for your services."
            />
          </RadioCard>
        )}
      </Select.Option>
      <Select.Option value="b">
        {props => (
          <RadioCard className="w-6/12" {...props}>
            <RadioCard.Content
              icon={windowIcon}
              title="Hosting plans 🔥"
              desc="High-performance web hosting plans."
            />
          </RadioCard>
        )}
      </Select.Option>
    </Select>
  </div>
)

export const Cards = TemplateCards.bind({});
Cards.args = {
};

const TemplateRadio = (args) => (
  <Select {...args}>
    <Select.Option value="a">
      {props => (
        <div
          {...props}
          className="flex items-center cursor-pointer text-primary my-2"
        >
          <RadioCircle checked={props.checked} className="mr-2"/>
          Select.Option 1
        </div>
      )}
    </Select.Option>
    <Select.Option value="b">
      {props => (
        <div
          {...props}
          className="flex items-center cursor-pointer text-primary my-2"
        >
          <RadioCircle checked={props.checked} className="mr-2"/>
          Select.Option 2
        </div>
      )}
    </Select.Option>
    <Select.Option value="c">
      {props => (
        <div
          {...props}
          className="flex items-center cursor-pointer text-primary my-2"
        >
          <RadioCircle checked={props.checked} className="mr-2"/>
          Select.Option 3
        </div>
      )}
    </Select.Option>
  </Select>
)

export const Radio = TemplateRadio.bind({});
Radio.args = {
};

export const multiple = TemplateRadio.bind({});
multiple.args = {
  multiple: true
};

export const DefaultValue = TemplateRadio.bind({});
DefaultValue.args = {
  defaultValue: 'c'
};