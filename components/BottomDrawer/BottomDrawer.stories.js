import BottomDrawer from './BottomDrawer';

export default {
  title: 'Example/BottomDrawer',
  component: BottomDrawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <BottomDrawer {...args}>{args.label}</BottomDrawer>;

export const Primary = Template.bind({});
Primary.args = {
  headerTitle: 'Frequently Asked Questions',
  visible: false,
};