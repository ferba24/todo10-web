import Slider from './Slider';

export default {
  title: 'Example/Slider',
  component: Slider,
};

const items = [1,2,3,4,5].map(n => (
  <div key={n}>
    <div className="mx-3.5 p-4 bg-gray-500">
      {n}
    </div>
  </div>
))

const Template = (args) => <Slider {...args}/>

export const Default = Template.bind({});
Default.args = {
  slidesToShow: 3,
  children: items,
};