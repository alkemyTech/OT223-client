import React from 'react';
import {
  Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl,
} from 'reactstrap';
import Slides from './carouselTest';

function Slider() {
  return (
    <Carousel
      activeIndex={1}
      /* next={function noRefCheck(){}}
      previous={function noRefCheck(){}} */
    >
      <CarouselIndicators
        activeIndex={5}
        items={[
          {
            altText: 'Slide 1',
            caption: 'Slide 1',
            key: 1,
            src: 'https://picsum.photos/id/123/1200/600',
          },
          {
            altText: 'Slide 2',
            caption: 'Slide 2',
            key: 2,
            src: 'https://picsum.photos/id/456/1200/600',
          },
          {
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
            src: 'https://picsum.photos/id/678/1200/600',
          },
        ]}
      /* onClickHandler={function noRefCheck(){}} */
      />
      {Slides.map((slide) => (
        <CarouselItem key={slide.id}>
          <img src={slide.url} alt='slide' width={250} height={250} />
          <CarouselCaption
            captionHeader={slide.text}
            captionText={slide.text}
          />
        </CarouselItem>
      ))}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        /* onClickHandler={function noRefCheck(){}} */
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        /* onClickHandler={function noRefCheck(){}} */
      />
    </Carousel>
  );
}

export default Slider;
