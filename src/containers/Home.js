import React, { useState } from "react";
import "../assets/styles/Home.css";
import {
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselIndicators,
  CarouselControl,
} from "reactstrap";
import img1 from "../assets/images/1.2.png";
import img2 from "../assets/images/2.1.png";
import img3 from "../assets/images/1.2.png";

const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
  },
];

function Home(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (this.animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
        <img src={item.src} alt={item.altText} className="d-block h-100" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div class="home-container">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Home;
