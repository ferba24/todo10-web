import Slider from './Slider';
import alejandroSanz from '../../public/images/alejandro-sanz.jpg'
import ClientCard from '../ClientCard'

export default {
  title: 'Example/Slider',
  component: Slider,
};

const sampleText = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum mattis ornare. Nulla arcu massa, eleifend non est quis”'
const sampleExtra = "Alejandro Sanz, Cantante. Sony Music."

const clients = [1,2,3,4,5].map(n => (
  <div key={n}>
    <div className="p-2 md:p-4">
      <ClientCard
        image={alejandroSanz}
        text={sampleText}
        extra={sampleExtra}
      />
    </div>
  </div>
))

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