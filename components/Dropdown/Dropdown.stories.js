import Dropdown from './Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
};

const Template = (args) => (
  <Dropdown {...args}>
    Hover me
  </Dropdown>
)

export const Default = Template.bind({});
Default.args = {
  overlay: "Menu"
};