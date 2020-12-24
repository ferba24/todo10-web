import Card from './Card';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => <Card {...args}/>;

export const Default = Template.bind({});
Default.args = {
  shadow: false,
  shadowOnHover: false,
  bordered: true,
  children: 'Contenido',
};