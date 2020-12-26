import ChipSelector from './ChipSelector';
import wordpress from '../../public/icons/wordpress.svg'
import xenforo from '../../public/icons/xenforo.svg'

export default {
  title: 'Example/ChipSelector',
  component: ChipSelector,
  argTypes: {
    onChange: { action: 'Value change' },
  }
};

const Template = (args) => (
  <ChipSelector {...args}>
    <ChipSelector.Option value="wordpress">
      {props => (
        <ChipSelector.Chip {...props}>
          <ChipSelector.MiniContent image={wordpress} title="Wordpress"/>
        </ChipSelector.Chip>
      )}
    </ChipSelector.Option>
    <ChipSelector.Option value="xenforo">
      {props => (
        <ChipSelector.Chip {...props}>
          <ChipSelector.MiniContent image={xenforo} title="XenForo"/>
        </ChipSelector.Chip>
      )}
    </ChipSelector.Option>
  </ChipSelector>
)

export const Default = Template.bind({});
Default.args = {
  defaultValue: "xenforo",
};