import Card from './Card';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => <Card {...args}/>;

export const Default = Template.bind({});
Default.args = {
  children: 'Default card'
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
  bordered: false,
  children: 'shadow={true} bordered={false}',
  className: 'w-full max-w-lg text-center',
};

export const Ribbon = Template.bind({});
Ribbon.args = {
  shadowOnHover: true,
  children: 'With ribbon and shadowOnHover',
  ribbon: 'Save 20%',
  className: 'w-full max-w-lg text-center',
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Card style and customized ribbon',
  className: 'w-full max-w-lg text-center',
  style: { borderWidth: 3, borderColor: 'var(--color-blue)' },
  ribbon: 'Most Sold!',
  ribbonStyle: { backgroundColor: '#3B3' }
};