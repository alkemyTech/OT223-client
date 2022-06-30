import React from 'react';
import Carousel from 'react-grid-carousel';
import Slides from './carouselTest';

function Slider() {
  return (
    <Carousel
      cols={5}
      rows={1}
      gap={11}
      responsiveLayout={[
        {
          breakpoint: 1200,
          cols: 3,
        },
        {
          breakpoint: 990,
          cols: 2,
        },
      ]}
      mobileBreakpoint={670}
      showDots
      loop
    >
      {Slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img src={slide.url} alt='slide' width={250} height={250} />
          <h2>{slide.text}</h2>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
