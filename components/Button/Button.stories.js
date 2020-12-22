import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args}>{args.label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Hola'
};

export const Default = Template.bind({});
Default.args = {
  label: 'Hola',
  type: 'default',
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Hola',
  type: 'outline',
  
};