import * as React from "react";
import background1 from "../../images/wallpaper1.jpg";
import background2 from "../../images/wallpaper2.jpg";
import background3 from "../../images/wallpaper3.jpg";
import background4 from "../../images/wallpaper4.jpg";
import background5 from "../../images/wallpaper5.jpg";
import "./LandingBackground.css";

function LandingBackground() {
  return (
    <div className="images">
      <img className="image1" src={background1} alt="Dark Souls 3" />
      <img className="image2" src={background2} alt="GTA V" />
      <img className="image3" src={background3} alt="The Last Of Us: Part 2" />
      <img className="image4" src={background4} alt="Super Mario Odyssey" />
      <img
        className="image5"
        src={background5}
        alt="The Binding of Isaac Rebirth"
      />
    </div>
  );
}

export default LandingBackground;
