import RadioCard from './RadioCard';

export default {
  title: 'Example/RadioCard',
  component: RadioCard,
};

const Template = (args) => <RadioCard style={{width: 100}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
  className: 'w-6/12',
  checked: false,
};