import React, { useState } from 'react';
import {
  Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl,
} from 'reactstrap';
import slides from './carouselTest';

function CustomSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const previousIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(previousIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        activeIndex={activeIndex}
        items={slides}
        onClickHandler={goToIndex}
      />
      {slides.map((slide) => (
        <CarouselItem
          onExisting={() => setAnimating(true)}
          onExisted={() => setAnimating(false)}
          key={slide.id}
        >
          <img src={slide.url} alt='slide' width='100%' height={500} />
          <CarouselCaption
            captionHeader={slide.text}
            captionText={slide.text}
          />
        </CarouselItem>
      ))}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CustomSlider;
