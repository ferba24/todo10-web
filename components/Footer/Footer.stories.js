import Footer from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
};

const Template = (args) => <Footer style={{marginTop: 450}} {...args}/>;

export const Default = Template.bind({});
Default.args = {
};