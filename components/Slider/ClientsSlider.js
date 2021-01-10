import Slider from '.';
import ClientCard from '../ClientCard'

const slideOptions = {
  autoplay: true,
  speed: 500,
  centerMode: true,
  centerPadding: "20%",
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
}

const sampleText = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum mattis ornare. Nulla arcu massa, eleifend non est quis”'
const sampleExtra = "Alejandro Sanz, Cantante. Sony Music."

export const clients = [1,2,3,4,5].map(n => (
  <div key={n}>
    <div className="p-2 md:p-4">
      <ClientCard
        image="/images/alejandro-sanz.jpg"
        text={sampleText}
        extra={sampleExtra}
      />
    </div>
  </div>
))

export default function ClientsSlider() {
  return (
    <Slider {...slideOptions}>
      {clients}
    </Slider>
  )
}