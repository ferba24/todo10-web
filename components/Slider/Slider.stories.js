import Slider from './Slider';
import { clients } from './ClientsSlider'

export default {
  title: 'Example/Slider',
  component: Slider,
};

const items = ['cadetblue','coral','darkgray'].map(color => (
  <div key={color} className="p-3">
    <div key={color} style={{background: color}}>
      {color}
    </div>
  </div>
))

const Template = (args) => <Slider {...args}/>

export const Default = Template.bind({})
Default.args = {
  children: items
}

export const Clients = Template.bind({})
Clients.args = {
  autoplay: true,
  children: clients,
  speed: 500,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: '150px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};