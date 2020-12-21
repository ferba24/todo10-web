import Card from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args}>{args.label}</Card>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'a',
};