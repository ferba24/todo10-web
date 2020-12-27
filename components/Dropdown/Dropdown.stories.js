import Dropdown from './Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
};

const Template = (args) => (
  <Dropdown {...args}>
    trigger
  </Dropdown>
)

export const Default = Template.bind({});
Default.args = {
  overlay: "Menu"
};