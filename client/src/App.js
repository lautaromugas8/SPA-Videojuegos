import "./App.css";
import background1 from "./images/wallpaper1.jpg";
import background2 from "./images/wallpaper2.jpg";
import background3 from "./images/wallpaper3.jpg";
import background4 from "./images/wallpaper4.jpg";
import background5 from "./images/wallpaper5.jpg";

function App() {
  return (
    <div className="App">
      <button>Ingresar</button>
      <img className="image1" src={background1} alt="Dark Souls 3" />
      <img className="image2" src={background2} alt="Dark Souls 3" />
      <img className="image3" src={background3} alt="Dark Souls 3" />
      <img className="image4" src={background4} alt="Dark Souls 3" />
      <img className="image5" src={background5} alt="Dark Souls 3" />
    </div>
  );
}

export default App;
