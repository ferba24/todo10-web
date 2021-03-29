import Slider from '.';
import ClientCard from '../ClientCard'
import testimonials from '../../data/testimonials'

const slideOptions = {
  autoplay: true,
  speed: 500,
  centerMode: true,
  centerPadding: "30%",
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


export const clients = testimonials.map(testimonial => (
  <div key={testimonial.image}>
    <div className="p-2 md:p-4">
      <ClientCard
        image={testimonial.image}
        text={testimonial.text}
        extra={testimonial.extra}
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