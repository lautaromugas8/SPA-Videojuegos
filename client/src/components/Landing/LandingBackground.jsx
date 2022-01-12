import * as React from "react";
import background1 from "../../images/wallpaper1.jpg";
import background2 from "../../images/wallpaper2.jpg";
import background3 from "../../images/wallpaper3.jpg";
import background4 from "../../images/wallpaper4.jpg";
import background5 from "../../images/wallpaper5.jpg";
import phonewallpaper1 from "../../images/phonewallpaper1.jpg";
import phonewallpaper2 from "../../images/phonewallpaper2.jpg";
import phonewallpaper3 from "../../images/phonewallpaper3.png";
import phonewallpaper4 from "../../images/phonewallpaper4.jpg";
import phonewallpaper5 from "../../images/phonewallpaper5.jpg";
import "./LandingBackground.css";

const mq = window.matchMedia("(max-width: 425px)");

function LandingBackground() {
  return (
    <div className="images">
      <img
        className="image1"
        src={mq.matches ? phonewallpaper1 : background1}
        alt="Dark Souls 3"
      />
      <img
        className="image2"
        src={mq.matches ? phonewallpaper2 : background2}
        alt="GTA V"
      />
      <img
        className="image3"
        src={mq.matches ? phonewallpaper3 : background3}
        alt="The Last Of Us: Part 2"
      />
      <img
        className="image4"
        src={mq.matches ? phonewallpaper4 : background4}
        alt="Super Mario Odyssey"
      />
      <img
        className="image5"
        src={mq.matches ? phonewallpaper5 : background5}
        alt="The Binding of Isaac Rebirth"
      />
    </div>
  );
}

export default LandingBackground;
