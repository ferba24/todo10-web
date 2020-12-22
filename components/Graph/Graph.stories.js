import Graph from './Graph';

export default {
  title: 'Example/Graph',
  component: Graph,
  argTypes: {
  },
};

const Template = (args) => <Graph {...args}/>;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      label: 'Todo10',
      value: 20,
      color: '#7EB131',
      labelPrefix: ' 😌 .'
    },
    {
      label: 'Otro',
      value: 46,
      color: '#FFBA34',
      labelPrefix: ' 😟 .'
    },
    {
      label: 'Otro',
      value: 55,
      color: '#C0213C',
      labelPrefix: ' 😡 .'
    }
  ]
};