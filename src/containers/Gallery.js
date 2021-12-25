import React from "react";
import CardCarousel from "../components/CardCarousel";
import "../assets/styles/Gallery.css";

function Gallery(props) {
  return (
    <div>
      <h1 class="gallery-header">{props.pageName}</h1>
      {props.sections.map((section) => {
        return <CardCarousel section={section} />;
      })}
    </div>
  );
}

export default Gallery;
