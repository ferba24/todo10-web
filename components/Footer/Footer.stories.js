import Footer from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Footer style={{marginTop: 450}} {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
};