import React from "react";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import images from "../shared/images";

import "react-multi-carousel/lib/styles.css";
import "../assets/styles/CardCarousel.css";

function CardCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <h3 className="section section-name">{props.section.name}</h3>
      <h5 className="section section-location">
        <i>{props.section.location}</i>
      </h5>
      {props.section.images && props.section.images.length > 1 ? (
        <Carousel
          ssr
          partialVisible
          draggable={true}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          deviceType="desktop"
          itemClass="image-item"
          responsive={responsive}
        >
          {props.section.images.map((image) => {
            console.log(props.section.images.length);
            return (
              <Image
                key={image.default}
                draggable={false}
                style={{ height: "100%" }}
                src={images[`${image}.png`].default}
              />
            );
          })}
        </Carousel>
      ) : (
        <div>No Images Available</div>
      )}
    </div>
  );
}

export default CardCarousel;
