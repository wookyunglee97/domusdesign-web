import React from "react";
import "../assets/styles/Home.css";
import TextTransition, { presets } from "react-text-transition";
import images from "../shared/images";

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
            <h1 className="sub-header"> with domus design</h1>
            <div>Building your forever home?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
