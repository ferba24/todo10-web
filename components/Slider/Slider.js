import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlickSlider from "react-slick";

export default function Slider({children, ...settings}) {

  return (
    <SlickSlider {...settings}>
      {children}
    </SlickSlider>
  );
}