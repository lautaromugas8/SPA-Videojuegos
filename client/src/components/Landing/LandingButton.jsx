import React from "react";
import "./LandingButton.css";
import { Link } from "react-router-dom";

function LandingButton() {
  return (
    <Link to="/home">
      <button className="button">Ingresar</button>
    </Link>
  );
}

export default LandingButton;
