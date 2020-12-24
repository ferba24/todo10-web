import MenuIcon from './MenuIcon';

export default {
  title: 'Example/MenuIcon',
  component: MenuIcon,
  argTypes: {
    color: {
      control: {type: 'color'}
    }
  },
};

const Template = (args) => <MenuIcon {...args}/>;

export const Default = Template.bind({});
Default.args = {
  open: false,
  size: 'large'
};