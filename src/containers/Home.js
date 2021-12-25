import React from "react";
import "../assets/styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import TextTransition, { presets } from "react-text-transition";
import images from "../shared/images";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const BACKGROUNDS = [
  { text: "Ideate", image: "2.1.png" },
  { text: "Build", image: "19.5.png" },
  { text: "Enhance", image: "1.1.png" },
];

function Home() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    BACKGROUNDS.forEach((bk_item) => {
      const img = new Image();
      img.src = images[bk_item.image].default;
    });
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1) % BACKGROUNDS.length),
      4000 // every 4 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div class="home-container">
      <div
        className="home-img"
        style={{
          backgroundImage:
            "url(" + images[BACKGROUNDS[index].image].default + ")",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="overlay">
          <div class="intro-text">
            <h1 className="switch-header">
              <TextTransition
                text={BACKGROUNDS[index].text}
                springConfig={presets.wobbly}
              />
            </h1>
            <h1 className="sub-header">
              {" "}
              together with <b>domus design</b>
            </h1>
            <div className="intro-content">Building your forever home?</div>
            <div className="intro-content">
              Need a new storefront for your growing business?
            </div>
            <div className="intro-content">
              Don't just dream it, <b>achieve</b> it with Domus Design
            </div>
            <NavLink to="/domusdesign-web/contact" className="contact-redirect">
              <Button bsClass="contact-button">
                Contact Us
                <FontAwesomeIcon
                  icon={faArrowCircleRight}
                  style={{ marginLeft: "5px" }}
                />
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
