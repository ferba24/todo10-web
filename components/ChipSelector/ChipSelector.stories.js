import ChipSelector, { Chip } from './ChipSelector';
import { Option } from '../Select'
import wordpress from '../../public/icons/wordpress.svg'
import xenforo from '../../public/icons/xenforo.svg'

export default {
  title: 'Example/ChipSelector',
  component: ChipSelector,
};

const MiniContent = ({image, name}) => (
  <div className="flex items-center justify-center p-3 cursor-pointer text-wordpress">
    <img src={image} className="mr-3"/>
    <div className="font-bold text-lg">{name}</div>
  </div>
)

const Template = (args) => (
  <ChipSelector {...args}>
    <Option value="wordpress" index={0}>
      {props => (
        <Chip {...props}>
          <MiniContent image={wordpress} name="Wordpress"/>
        </Chip>
      )}
    </Option>
    <Option value="xenforo" index={1}>
      {props => (
        <Chip {...props}>
          <MiniContent image={xenforo} name="XenForo"/>
        </Chip>
      )}
    </Option>
  </ChipSelector>
)

export const Default = Template.bind({});
Default.args = {
  defaultValue: "xenforo",
  defaultSelectedIndex: 1
};