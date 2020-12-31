import Layout from './Layout';

export default {
  title: 'Example/Layout',
  component: Layout,
};

const Template = (args) => <Layout {...args}/>;

export const Default = Template.bind({});
Default.args = {
};