import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li id="home">Home</li>
          <li id="crear">Crear</li>
          <li id="about">Acerca de</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
