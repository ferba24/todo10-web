import BenefitsSection from './BenefitsSection';
import benefits from '../../data/hosting/benefits'

export default {
  title: 'Example/BenefitsSection',
  component: BenefitsSection,
};

const Template = (args) => <BenefitsSection {...args}/>

export const Default = Template.bind({});
Default.args = {
  benefits
};