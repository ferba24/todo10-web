import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlickSlider from "react-slick";

const defaultSettings = {
  speed: 500,
  slidesToShow: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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

export default function Slider({children, ...settings}) {

  const finalSettings = {
    ...defaultSettings,
    ...settings
  }

  return (
    <SlickSlider {...finalSettings}>
      {children}
    </SlickSlider>
  );
}