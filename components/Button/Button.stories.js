import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>{args.label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Send',
  className: ''
};

export const Blue = Template.bind({});
Blue.args = {
  label: 'Send',
  type: 'blue',
  className: ''
};

export const Default = Template.bind({});
Default.args = {
  label: 'Send',
  type: 'default',
  className: ''
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Send',
  type: 'outline',
  className: ''
};

export const Text = Template.bind({});
Text.args = {
  label: 'Send',
  type: 'text',
  className: ''
};