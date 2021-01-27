import Graph from './Graph';
import responseTimes from '../../data/hosting/responseTimes'

export default {
  title: 'Example/Graph',
  component: Graph,
};

const Template = (args) => <Graph {...args}/>;

export const Default = Template.bind({});
Default.args = {
  data: responseTimes
};