import RadioCard from './RadioCard';

export default {
  title: 'Example/RadioCard',
  component: RadioCard,
};

const Template = (args) => <RadioCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  className: 'w-5/12',
  checked: false,
  children: 'Change `checked` in controls'
};