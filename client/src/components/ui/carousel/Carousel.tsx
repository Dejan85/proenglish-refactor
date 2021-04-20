import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselUi = (props) => {
  const {
    showThumbs = false,
    showStatus = false,
    showArrows = false,
    autoPlay = true,
    stopOnHover = true,
    interval = 7000,
    children,
  } = props;
  return (
    <Carousel
      showThumbs={showThumbs}
      showStatus={showStatus}
      showArrows={showArrows}
      autoPlay={autoPlay}
      stopOnHover={stopOnHover}
      interval={interval}
    >
      {children}
    </Carousel>
  );
};

export default CarouselUi;
