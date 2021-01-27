import Arrow from './Arrow';

export default {
  title: 'Example/Arrow',
  component: Arrow,
};

const Template = (args) => <Arrow {...args}/>;

export const Default = Template.bind({});
Default.args = {
  size: 'middle',
  direction: 'right'
};