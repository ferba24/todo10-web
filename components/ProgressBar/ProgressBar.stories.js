import ProgressBar from './ProgressBar';

export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progressColor: {
      control: {type: 'color'}
    }
  },
};

const Template = (args) => <ProgressBar {...args}/>;

export const Default = Template.bind({});
Default.args = {
  value: 40,
  progressColor: '#5CC3D4',
  max: 100,
  labelPrefix: '... ',
  labelSuffix: '%',
  className: 'bg-gray-200'
};