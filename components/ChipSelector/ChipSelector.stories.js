import ChipSelector, { Chip } from './ChipSelector';
import Select from '../Select'
import wordpress from '../../public/icons/wordpress.svg'
import xenforo from '../../public/icons/xenforo.svg'

export default {
  title: 'Example/ChipSelector',
  component: ChipSelector,
  argTypes: {
    onChange: { action: 'Value change' },
  }
};

const MiniContent = ({image, name}) => (
  <div className="flex items-center justify-center p-3 cursor-pointer text-wordpress">
    <img src={image} className="mr-3"/>
    <div className="font-bold text-lg">{name}</div>
  </div>
)

const Template = (args) => (
  <ChipSelector {...args}>
    <Select.Option value="wordpress">
      {props => (
        <Chip {...props}>
          <MiniContent image={wordpress} name="Wordpress"/>
        </Chip>
      )}
    </Select.Option>
    <Select.Option value="xenforo">
      {props => (
        <Chip {...props}>
          <MiniContent image={xenforo} name="XenForo"/>
        </Chip>
      )}
    </Select.Option>
  </ChipSelector>
)

export const Default = Template.bind({});
Default.args = {
  defaultValue: "xenforo",
};