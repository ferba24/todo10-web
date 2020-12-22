import Card from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args}>{args.content}</Card>;

export const Primary = Template.bind({});
Primary.args = {
  shadow: false,
  bordered: true,
  content: 'Contenido',
};