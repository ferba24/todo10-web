import Stepper from './Stepper';
import initialStep from '../../data/pricing/steps'

export default {
  title: 'Example/Stepper',
  component: Stepper,
};

const Template = (args) => <Stepper {...args}/>;

export const Default = Template.bind({});
Default.args = {
  initialStep
};