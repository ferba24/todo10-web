import Result from './Result';

export default {
  title: 'Example/Result',
  component: Result,
};

const Template = (args) => <Result {...args}/>

export const Default = Template.bind({});
Default.args = {
};