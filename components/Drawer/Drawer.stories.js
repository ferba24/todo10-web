import Drawer from './Drawer';

export default {
  title: 'Example/Drawer',
  component: Drawer,
};

const Template = (args) => <Drawer {...args}/>;

export const Default = Template.bind({});
Default.args = {
  visible: true,
};